import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private userService: UserService, private router: Router){}

  ngOnInit():void{}

  onSubmit(form: NgForm){
    var name = form.value.name;
    var surname = form.value.surname;
    var email = form.value.email;
    var telephone = form.value.telephone;
    var address = form.value.address;
    var favorites = form.value.favorites;
    var username = form.value.username;
    var password = form.value.password;

    var randomId = Math.floor(Math.random() * (1000 - 102 + 1)) + 102;

    this.userService.addUser(randomId, name, surname, email, telephone, address, favorites, username, password);

    var id = this.userService.getUser(email).userId;
    this.router.navigate(['/profile', id]);
  }

}
