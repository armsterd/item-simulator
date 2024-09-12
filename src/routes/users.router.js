import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userDataClient } from '../utils/prisma/index.js';
import authorizationMiddleware from '../middlewares/authorization.middleware.js';

const router = express.Router();

// 회원가입
router.post('/signUp', async (req, res, next) => {
    try {
        const { account, password, confirmPassword, name } = req.body;
        const isExistUser = await userDataClient.user.findFirst({
            where: {
                user,
            },
        });

        if (isExistUser)
            return res
                .status(409)
                .json({ message: '이미 존재하는 아이디입니다.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const accountRegularExpression = /^[a-z0-9]+$/;
        if (!accountRegularExpression.test(account))
            return res.status(400).json({
                message: '아이디는 영어 소문자와 숫자의 조합이어야 합니다.',
            });

        if (password.length < 6)
            return res
                .status(400)
                .json({ message: '비밀번호는 6자이상이어야 합니다.' });

        if (password !== confirmPassword)
            return res.status(400).json({
                message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
            });

        const user = await userDataClient.user.create({
            data: {
                user,
                password: hashedPassword,
                name,
            },
        });

        return res.status(201).json({
            userId: user.id,
            account: user.account,
            name: user.name,
        });
    } catch (error) {
        console.log('에러 발생', error);
        return res
            .status(500)
            .json({ message: '회원가입 중 에러가 발생했습니다.' });
    }
});

// 로그인
router.post('/signIn', async (req, res, next) => {
    try {
        const { account, password } = req.body;
        const user = await userDataClient.user.findFirst({
            where: {
                user,
            },
        });
        console.log(user);

        if (!user)
            return res
                .status(401)
                .json({ message: '존재하지 않는 아이디입니다.' });
        else if (!(await bcrypt.compare(password, user.password)))
            return res
                .status(401)
                .json({ message: '비밀번호가 일치하지 않습니다.' });

        const token = jwt.sign(
            {
                userID: user.id,
            },
            'jwt-secret'
        );

        res.header.cookie('authorization', `Bearer ${token}`);
        return res.status(201).json({ message: '로그인 성공' });
    } catch (error) {
        console.error('에러 발생', error);
        return res.status(500).json({ message: '로그인 실패.' });
    }
});

// 캐릭터 생성
router.post('/character', authorizationMiddleware, async (req, res, next) => {
    const { name } = req.body;
    const userId = req.user.id;

    try {
        const isExistCharacterName = await userDataClient.character.findUnique({
            where: {
                name,
            },
        });

        if (isExistCharacterName)
            return res
                .status(409)
                .json({ message: '이미 존재하는 캐릭터 이름입니다.' });

        const newCharacter = await userDataClient.character.create({
            data: {
                name,
                userId,
                health: 400,
                power: 100,
                money: 10000,
                characterInventory: {
                    create: [],
                },
                characterItem: {
                    create: [],
                },
            },
            include: {
                characterInventory: true,
                characterItem: true,
            },
        });
        return res.status(201).json({ id: newCharacter.id });
    } catch (error) {
        console.error('캐릭터 생성 중 에러 발생:', error);
        return res
            .status(500)
            .json({ message: '캐릭터 생성 중 오류가 발생했습니다.' });
    }
});

// 캐릭터 삭제
router.delete(
    '/character/:id',
    authorizationMiddleware,
    async (req, res, next) => {
        const characterId = parseInt(req.params.id, 10);
        const accountId = req.user.id;

        try {
            const character = await userDataClient.character.findUnique({
                where: {
                    id: characterId,
                },
                include: {
                    account: true,
                },
            });

            if (!character) {
                return res
                    .status(400)
                    .json({ message: '존재하지 않는 캐릭터입니다.' });
            }

            if (character.accountId !== accountId)
                return res
                    .status(403)
                    .json({ message: '삭제할 권한이 없습니다.' });

            await userDataClient.character.delete({
                where: {
                    id: characterId,
                },
            });

            return res
                .status(200)
                .json({ message: '캐릭터가 삭제되었습니다.' });
        } catch (error) {
            console.error('에러 발생:', error);
            return res
                .status(500)
                .json({ message: '캐릭터 삭제 중 오류가 발생하였습니다.' });
        }
    }
);

// 캐릭터 조회
router.get(
    '/character/:id',
    authorizationMiddleware,
    async (req, res, next) => {
        const characterId = parseInt(req.params.id, 10);
        const accountId = req.user.id;

        try {
            const character = await userDataClient.character.findUnique({
                where: {
                    id: characterId,
                },
                include: {
                    account: true,
                    characterInventory: true,
                    characterItem: true,
                },
            });

            if (!character)
                return res
                    .status(404)
                    .json({ message: '캐릭터를 찾을 수 없습니다.' });

            const isOwner = character.accountId === accountId;

            const characterData = {
                name: character.name,
                health: character.health,
                power: character.power,
            };

            if (isOwner) {
                characterData.money = character.money;
            }

            return res.status(200).json(characterData);
        } catch (error) {
            console.error('캐릭터 조회 중 에러 발생:', error);
            return res.status(500).json({ message: '조회 실패' });
        }
    }
);

export default router;
