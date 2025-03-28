import {createAccountFieldsConfig, footerConfig} from "./config.tsx";
import s from '../Login/styles.module.scss'
import {ICreateAccountDTO} from "../../../types/authTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import UForm from "../../common/UForm";

const CreateAccount = () => {
    return (
        <main
            className={s.main_login}
        >
            <UForm<ICreateAccountDTO>
                cfg={{
                    label: ru.createAccount.label,
                    authFieldsConfig: createAccountFieldsConfig,
                    className: s.login_form,
                    onFinishAction: (values: ICreateAccountDTO) => console.log(values),
                    button: {
                        label: ru.buttons.create,
                        className: s.login_button,
                    },
                    footer: footerConfig,
                }}
            />
        </main>
    )
}

export default CreateAccount