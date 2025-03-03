import { CreateUserDTO, LoginUserDTO, UserStatus } from "../interfaces/User";
import { userRepository } from "../repositories/userRepository";
import { otpService } from "./otpService";

export const userService = {
    
    async createUser(data: CreateUserDTO) {
        var user = await userRepository.findUserByEmail(data.email)
        if(user) {
            throw new Error(`E-mail ${user.email} already exists.`)
        }

        return await userRepository.createUser({
            name: data.name,
            email: data.email,
            status: UserStatus[UserStatus.ACTIVE]
        })
    },

    async login(data: LoginUserDTO) {
        var user = await userRepository.findUserByEmail(data.email)

        if(!user) {
            throw new Error(`E-mail ${data.email} not found`)
        }

        return await otpService.generateOTP(user.id, user.email)
    }
}