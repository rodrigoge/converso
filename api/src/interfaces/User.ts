export interface CreateUserDTO {
    name: string
    email: string
    status: UserStatus
}

export enum UserStatus {
    'ACTIVE', 'INACTIVE'
}