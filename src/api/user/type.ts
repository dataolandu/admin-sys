export interface reLoginRequest {
    accessToken: string;
}

export interface loginRequest {
    username: string;
    password: string;
}

export interface loginResponse {
    username: string;
    accessToken: string;
    roles: string[];
}