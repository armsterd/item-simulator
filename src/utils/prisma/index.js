import { PrismaClient as GameDataClient } from '../../../prisma/gameData/generated/gameDataClient/index.js';
import { PrismaClient as UserDataClient } from '../../../prisma/userData/generated/userDataClient/index.js';

export const gameDataClient = new GameDataClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
});

export const userDataClient = new UserDataClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
});
