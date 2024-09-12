import { gameDataClient } from '../utils/prisma/index.js';
import express from 'express';

const router = express.Router();

// 아이템 생성
router.post('/item', async (req, res, next) => {
    const { itemCode, itemName, itemStat, price } = req.body;
    try {
        const newItem = await gameDataClient.item.create({
            data: {
                itemCode,
                itemName,
                health: itemStat.health,
                power: itemStat.power,
                price,
            },
        });

        return res.status(201).json({ id: newItem.id });
    } catch (error) {
        console.error('에러 발생: ', error);
        return res.status(500).json({ message: '아이템 생성 중 에러 발생' });
    }
});

// 아이템 수정
router.post('/item/:id', async (req, res, next) => {
    const itemId = parseInt(req.params.id, 10);
    const { itemName, itemStat } = req.body;
    try {
        const existItem = await gameDataClient.item.findUnique({
            where: {
                id: itemId,
            },
        });

        if (!existItem)
            return res
                .status(404)
                .json({ message: '아이템을 찾을 수 없습니다.' });

        const updateItem = await gameDataClient.item.update({
            where: {
                id: itemId,
            },
            data: {
                itemName,
                health: itemStat.health,
                power: itemStat.power,
            },
        });
        return res.status(200).json({ message: '수정 완료', updateItem });
    } catch (error) {
        console.error('에러 발생: ', error);
        return res.status(500).json({ message: '아이템 수정 중 에러 발생' });
    }
});

// 아이템 전체 조회
router.get('/items', async (req, res, next) => {
    try {
        const items = await gameDataClient.item.findMany({
            select: {
                itemCode: true,
                itemName: true,
                price: true,
            },
        });
        return res.status(200).json(items);
    } catch (error) {
        console.error('에러 발생: ', error);
        return res
            .status(500)
            .json({ message: '아이템 전체 조회 중 에러 발생' });
    }
});

// 아이템 조회
router.get('/item/:itemCode', async (req, res, next) => {
    const itemCode = parseInt(req.params.itemCode, 10);
    try {
        const item = await gameDataClient.item.findUnique({
            where: {
                itemCode: itemCode,
            },
            select: {
                itemCode: true,
                itemName: true,
                health: true,
                power: true,
                price: true,
            },
        });

        if (!item)
            return res
                .status(404)
                .json({ message: '아이템을 찾을 수 없습니다.' });

        const itemWithStatus = {
            itemCode: item.itemCode,
            itemName: item.itemName,
            itemStat: { health: item.health, power: item.power },
            itemPrice: item.price,
        };

        return res.status(200).json(itemWithStatus);
    } catch (error) {
        console.error('에러 발생: ', error);
        return res.status(500).json({ message: '아이템 조회 중 에러 발생' });
    }
});

export default router;
