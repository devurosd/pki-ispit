import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private products: Product[];

    constructor(){
        this.products = [
            new Product(101, 'Programiranje i dizajn korisničkog interfejsa', 'Computer', 339, 'Singidunum', '05.04.2023.', 2500.10, 'DONE', 4.7, "https://singipedia.singidunum.ac.rs/assets/upload/images/2023/05/book-230511-11184342608758.png"),
            new Product(102, 'Kvantitativne metode', 'Mathematics', 213, 'Singidunum', '05.10.2020.', 1850.67, 'DONE', 4.5, "https://singipedia.singidunum.ac.rs/assets/upload/images/2022/12/book-221212-15221444119631.png"),
            new Product(103, 'Introduction to Machine Learning', 'Computer', 189, 'Singidunum', '05.10.2023.', 2999.99, 'DONE', 4.3, "https://singipedia.singidunum.ac.rs/assets/upload/images/2023/02/book-230220-15273796744050.png"),
            new Product(104, 'Turizam - teorija i principi', 'Tourism', 323, 'Singidunum', '05.10.2022.', 1499.99, 'DONE', 4.5, "https://singipedia.singidunum.ac.rs/assets/upload/images/2022/04/book-220418-08262660491588.png"),
            new Product(105, 'Upravljanje projektom', 'Management', 317, 'Singidunum', '05.10.2015.', 1250, 'DONE', 4.5, "https://singipedia.singidunum.ac.rs/assets/upload/images/2018/05/book-180530-13534888695068.png"),
            new Product(106, 'Programski jezici', 'Computer', 439, 'Singidunum', '05.10.2020.', 2699.99, 'DONE', 4.2, "https://singipedia.singidunum.ac.rs/assets/upload/images/2019/03/book-190311-15085162709655.png"),
            new Product(107, 'Digitalni marketing', 'Marketing', 411, 'Singidunum', '05.10.2015.', 2299.99, 'DONE', 4.5, "https://singipedia.singidunum.ac.rs/assets/upload/images/2021/10/book-211013-12190182294477.png"),
            new Product(108, 'Razvoj aplikativnog softvera', 'Computer', 206, 'Singidunum', '05.10.2015.', 2500, 'DONE', 4.5, "https://singipedia.singidunum.ac.rs/assets/upload/images/2022/07/book-220720-14501941793180.png"),
            new Product(109, 'Plivanje', 'Sport', 186, 'Singidunum', '05.10.2015.', 1799.99, 'DONE', 4.8, "https://singipedia.singidunum.ac.rs/assets/upload/images/2017/03/book-170331-16322543153991.png"),
            new Product(110, 'Razvoj mobilnih aplikacija', 'Computer', 370, 'Singidunum', '05.10.2015.', 3699.99, 'DONE', 4.1, "https://singipedia.singidunum.ac.rs/assets/upload/images/2020/03/book-200318-12545338262329.png"),
        ];
    }

    public getProducts(): Product[]{
        return this.products;
    }
}