import {FC, JSX} from "react";
import {Button, Form} from "antd";
import {authFieldsGenerator} from "../../../utils/generators.tsx";
import {footerConfig, loginFieldsConfig} from "./config.tsx";

import s from './styles.module.scss'
import {ru} from "../../../constants/messages.tsx";
import {ILoginDTO} from "../../../types/authTypes.tsx";
import Footer from "../../Layout/Footer";

const Login: FC = (): JSX.Element => {
    return (
        <main
            className={s.main_login}
        >
            <Form
                onFinish={(values: ILoginDTO) => console.log(values)}
                className={s.login_form}
            >
                <h1>
                    {ru.login.label}
                </h1>
                {authFieldsGenerator(loginFieldsConfig)}
                <Button htmlType={'submit'} className={s.login_button}>
                    {ru.buttons.enter}
                </Button>
                <Footer cfg={footerConfig} />
            </Form>
        </main>
    )
}

export default Login