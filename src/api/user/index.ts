import { get, post } from "../../http/request"
import { loginRequest, loginResponse, reLoginRequest } from "./type"


export const userLogin = (param: loginRequest) => {
    return get<loginResponse>({}, '/login', param)
}

export const refreshToken = (param: reLoginRequest) => {
    return post<string>({}, '/refreshToken', param)
}