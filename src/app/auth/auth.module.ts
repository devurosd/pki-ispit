import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations:[ ProfileComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule{}