import { CreateUserDTO } from "../interfaces/User";
import { userRepository } from "../repositories/userRepository";

export const userService = {
    async createUser(data: CreateUserDTO) {
        return await userRepository.createUser({
            name: data.name,
            email: data.email,
            status: data.status.toString()
        })
    }
}