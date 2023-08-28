import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists!: boolean;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user" + email;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect";
      return;
    }
    
    var id = this.userService.getUser(email).userId;
    this.errorExists = false;
    this.router.navigate(['/profile', id]);

  }

}
