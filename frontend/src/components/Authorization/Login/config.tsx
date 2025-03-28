import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import {IFooterConfig} from "../../Layout/Footer";

export const loginFieldsConfig: IAuthFieldsGenerator[] = [
    {
        label: ru.login.email,
        name: 'email',
        type: 'input',
        placeholder: ru.login.placeholders.email,
        required: true,
    },
    {
        label: ru.login.password,
        name: 'password',
        type: 'input',
        placeholder: ru.login.placeholders.password,
        required: true,
    },
]

export const footerConfig: IFooterConfig = {
    label: 'Нет аккаунта?',
    link: 'Создать',
    to: '/createAccount'
}