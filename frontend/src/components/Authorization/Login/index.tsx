import {FC, JSX} from "react";
import {footerConfig, loginFieldsConfig} from "./config.tsx";
import cn from 'classnames'
import s from './styles.module.scss'
import {ru} from "../../../constants/messages.tsx";
import {ILoginDTO} from "../../../types/authTypes.tsx";
import UForm from "../../common/UForm";

const Login: FC = (): JSX.Element => {
    return (
        <main
            className={s.main_login}
        >
            <UForm<ILoginDTO>
                cfg={{
                    label: ru.login.label,
                    authFieldsConfig: loginFieldsConfig,
                    className: cn(s.login_form, s.login_field_width),
                    onFinishAction: (values: ILoginDTO) => console.log(values),
                    button: {
                        label: ru.buttons.enter,
                        className: s.login_button,
                    },
                    footer: footerConfig,
                }}
            />
        </main>
    )
}

export default Login