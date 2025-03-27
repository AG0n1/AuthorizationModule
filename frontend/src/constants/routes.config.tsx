import {IRoutesGenerator} from "../types/generatorTypes.tsx";
import Login from "../components/Authorization/Login";

export const logoutUser: IRoutesGenerator[] = [
    {
        path: '/login',
        element: <Login />
    }
]

export const authorizedUser: IRoutesGenerator[] = []