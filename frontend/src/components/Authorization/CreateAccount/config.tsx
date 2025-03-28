import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import {IFooterConfig} from "../../Layout/Footer";

export const createAccountFieldsConfig: IAuthFieldsGenerator[] = [
    {
        label: ru.createAccount.userName,
        name: 'userName',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.email,
        name: 'email',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.password,
        name: 'password',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.confirmPassword,
        name: 'confirmPassword',
        type: 'input',
        required: true,
    },
]

export const footerConfig: IFooterConfig = {
    label: 'Уже есть аккаунт?',
    link: 'Войти',
    to: '/login'
}