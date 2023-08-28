export class User{
    constructor(public userId: number,
                public name: string,
                public surname: string,
                public email: string,
                public telephone: string,
                public address: string,
                public favorites: string[],
                public username: string,
                public password: string,
                ){
        
    }
}
