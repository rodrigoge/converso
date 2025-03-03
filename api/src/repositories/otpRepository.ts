import prisma from "../prisma/prisma.client";

const OTP_DATE_EXPIRATION = new Date(Date.now() + 5 * 60000)

export const otpRepository = {
    async sendOTP(userId: string, otp: string) {
        return await prisma.oTP.upsert({
            where: { userId },
            update: { code: otp, expiresAt: OTP_DATE_EXPIRATION },
            create: { userId, code: otp, expiresAt: OTP_DATE_EXPIRATION }
        })
    },

    async findOTP(userId: string) {
        return await prisma.oTP.findUnique({ where: { userId }})
    },

    async deleteOTP(userId: string) {
        return await prisma.oTP.delete({ where: { userId }})
    }
} 