import prisma from "../prisma/prisma.client";
import { Prisma } from '@prisma/client';

export const userRepository = {
    async createUser(data: Prisma.UserCreateInput) {
        return await prisma.user.create({data})
    }
}