export interface IUser {
    id: string;
    email: string;
    login: string;
    balance: number;
    level: number;
    avatar_src: string;
}

export interface IUserState extends IUser {
    isAuthorize: boolean;
}

export interface IState {
    userInfo: IUserState;
    isLoading: boolean;
    errorMessage: string | undefined;
}

export interface IUserRegister {
    email: string;
    login: string;
    password: string;
}

export interface MyKnownError {
    message: string;
}

export interface IUserLogin {
    login: string,
    password: string
  }

export interface IUploadAvatar {
    img: string;
    id: string;
}