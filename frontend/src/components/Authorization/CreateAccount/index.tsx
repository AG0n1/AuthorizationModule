import {authFieldsGenerator} from "../../../utils/generators.tsx";
import {createAccountFieldsConfig} from "./config.tsx";
import {Button, Form} from "antd";
import s from '../Login/styles.module.scss'
import {ICreateAccountDTO} from "../../../types/authTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import Footer, {IFooterConfig} from "../../Layout/Footer";

const footerConfig: IFooterConfig = {
    label: 'Уже есть аккаунт?',
    link: 'Войти',
    to: '/login'
}

const CreateAccount = () => {
    return (
        <main
            className={s.main_login}
        >
            <Form
                onFinish={(values: ICreateAccountDTO) => console.log(values)}
                className={s.login_form}
            >
                <h1>
                    {ru.createAccount.label}
                </h1>
                {authFieldsGenerator(createAccountFieldsConfig)}
                <Button htmlType={'submit'}>
                    {ru.buttons.create}
                </Button>
                <Footer cfg={footerConfig} />
            </Form>
        </main>
    )
}

export default CreateAccount