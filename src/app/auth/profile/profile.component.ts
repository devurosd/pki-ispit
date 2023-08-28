import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user!: User;

  private paramMapSub: Subscription;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const uId: number = Number(params.get('userId'));

      this.user = this.userService.getUsers()
          .filter(u => u.userId === uId)[0];

    });
   }
}
