export class CreateUserDto {
    firstName: string;
    lasName: string;
    isActive ?: boolean;
}

export class UpdateUserDto {
    firstName: string;
    lastName: string;
    isActive: boolean;
}