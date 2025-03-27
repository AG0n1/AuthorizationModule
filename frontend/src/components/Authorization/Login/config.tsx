import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import {ru} from "../../../constants/messages.tsx";

export const loginFieldsConfig: IAuthFieldsGenerator[] = [
    {
        label: 'Email:',
        name: 'email',
        type: 'input',
        placeholder: ru.login.placeholders.email,
        required: true,
    },
    {
        label: 'Пароль:',
        name: 'password',
        type: 'input',
        placeholder: ru.login.placeholders.password,
        required: true,
    },
]