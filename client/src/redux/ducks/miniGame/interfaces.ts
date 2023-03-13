export interface IMiniGame {
    id: number;
    src: string;
    isCurrent: boolean;
}

export interface MyKnownError {
    message: string;
}

export interface IUpDateScore {
    score: number,
    coins: number,
    userid: string
}