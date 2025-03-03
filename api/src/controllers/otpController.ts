import { Request, Response } from "express"
import { otpService } from "../services/otpService"

export const otpController = {
    async generateOTP(request: Request, response: Response) {
        try {
            const { userId, email } = request.body 
            const otp = await otpService.generateOTP(userId, email)
            response.status(200).json(otp)
        } catch (error) {
            response.status(500).json({ error: (error as Error).message });
        }
    },

    async validateOTP(request: Request, response: Response) {
        try {
            const { userId, code } = request.body 
            const otp = await otpService.validateOTP(userId, code)
            response.status(200).json(otp)
        } catch (error) {
            response.status(500).json({ error: (error as Error).message });
        }
    }
}