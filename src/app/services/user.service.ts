import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private users: User[];

    constructor(){
        this.users = [
            new User(101,
                    "Petar",
                    "Petrovic", 
                    "petar@petrovic.com", 
                    "+381 60 123 45", 
                    "Bul. 25", 
                    ["Tourism"], 
                    "ppetrovic", 
                    "petar123"
                    ),
        ];
    }

    public getUsers(): User[]{
        return this.users;
    }

    public getUser(userEmail: string): User {
        return this.users.find(userToFind => userToFind.email == userEmail)!;
    }

    public isPasswordCorrect(userEmail: string, password: string): boolean {
        return this.users.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    public addUser(userId: number, name: string, surname: string, email: string, telephone:string, address: string, favorites: string[], username: string, password: string){
        this.users.push(new User(userId, name, surname, email, telephone, address, favorites, username, password));
    }

}