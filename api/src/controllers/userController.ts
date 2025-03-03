import { Request, Response } from "express"
import { userService } from "../services/userService"

export const userController = {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email } = request.body 
            const userCreated  = await userService.createUser({name, email})
            response.status(201).json(userCreated)
        } catch (error) {
            response.status(500).json({ error: (error as Error).message });
        }
    },

    async login(request: Request, response: Response) {
        try {
            const { email } = request.body 
            const otp  = await userService.login({ email })
            response.status(200).json(otp)
        } catch (error) {
            response.status(500).json({ error: (error as Error).message });
        }
    } 
}