import { Request, Response } from "express"
import { userService } from "../services/userService"

export const userController = {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email, status } = request.body 
            const userCreated  = await userService.createUser({name, email, status})
            response.status(201).json(userCreated)
        } catch (error) {
            response.status(500).json({ error: 'Error on create a new user' });
        }
    }
}