import {FC, JSX} from "react";
import {Button, Form} from "antd";
import {authFieldsGenerator} from "../../../utils/generators.tsx";
import {loginFieldsConfig} from "./config.tsx";

import s from './styles.module.scss'
import {ru} from "../../../constants/messages.tsx";

const Login: FC = (): JSX.Element => {
    return (
        <main
            className={s.main_login}
        >
            <Form
                onFinish={(values) => console.log(values)}
                className={s.login_form}
            >
                <h1>
                    Войти
                </h1>
                {authFieldsGenerator(loginFieldsConfig)}
                <Button htmlType={'submit'} className={s.login_button}>
                    {ru.buttons.enter}
                </Button>
            </Form>
        </main>
    )
}

export default Login