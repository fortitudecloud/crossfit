export interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    auth: IUserAuth;
}

export interface IUserAuth {
    accessToken: string;
    refreshToken: string;
    expires: Date;
}