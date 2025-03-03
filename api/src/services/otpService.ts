import nodemailer from 'nodemailer'
import speakeasy from 'speakeasy'
import { otpRepository } from "../repositories/otpRepository";
import { OtpDTO } from "../interfaces/OTP";

import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET_TOKEN
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { 
        user: process.env.EMAIL_PROVIDER, 
        pass: process.env.EMAIL_PROVIDER_PASSWORD 
    }
})

export const otpService = {
    async generateOTP(userId: string, email: string) {
        if(!SECRET) {
            throw new Error('Error on load secret token')
        }

        const otp = speakeasy.totp({
            step: 300,
            digits: 6,
            secret: SECRET
        })

        await otpRepository.sendOTP(userId, otp)

        await transporter.sendMail({
            from: process.env.EMAIL_PROVIDER,
            to: email,
            subject: 'Converso - You received your OTP code',
            text: `Your code is ${otp}`
        })

        return otp
    },

    async validateOTP(userId: string, code: string) {
        const otpEntry = await otpRepository.findOTP(userId)

        if(!otpEntry || otpEntry.expiresAt < new Date()) {
            throw new Error(`Code ${otpEntry} is invalid or expirated`)
        }

        if(otpEntry.code !== code) {
            throw new Error(`Code ${otpEntry} is incorrect`)
        }

        const otpResponse : OtpDTO = { message: 'Login with successfully' }
        return otpResponse
    }
}