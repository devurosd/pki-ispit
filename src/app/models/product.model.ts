export class Product{
    constructor(public productId: number,
                public name: string,
                public genre: string,
                public numberOfPages: number,
                public publisher: string,
                public publishDate: string,
                public price: number,
                public status: string,
                public revRate: number,
                public pictureUrl: string
                ){
                    
    }
}
