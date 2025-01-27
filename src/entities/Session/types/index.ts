interface ISession {
    showdate: string,
    daytime: string
}

interface IMovieSessions {
    [key: number]: ISession[]
}

export type { ISession, IMovieSessions }
