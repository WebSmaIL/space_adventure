export interface IUsers {
  id: number;
  name: string;
  isOnline: boolean;
  email: string;
  password: string;
}

export interface IUserNameUpdate {
  id: number;
  name: string;
}

export interface IUserPasswordUpdate {
  id: number;
  password: string;
}

export interface IUserEmailUpdate {
  id: number;
  email: string;
}
