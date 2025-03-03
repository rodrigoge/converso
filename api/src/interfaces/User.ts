export interface CreateUserDTO {
    name: string
    email: string
}

export enum UserStatus {
    'ACTIVE', 'INACTIVE'
}

export interface LoginUserDTO {
    email: string
}