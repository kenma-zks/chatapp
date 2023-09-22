export interface IChatMessage {
  type?: string;
  time: string;
  text: string;
}

export interface IChatHeadData {
  id: number;
  Name: string;
  Date: Date;
  Time: string;
  Image: string | null;
  lastOnline?: string;
  messages: IChatMessage[];
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface tokenState {
  accessToken: string;
}

export interface authState {
  authTokens: tokenState | null;
  user: null | {
    _id: string;
  };
}
