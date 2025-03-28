export interface ILoginDTO {
    email: string;
    password: string;
}

export interface ICreateAccountDTO {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}