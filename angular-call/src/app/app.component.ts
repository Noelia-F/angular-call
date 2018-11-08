import { Component, OnInit } from '@angular/core';
import { UsersService} from './users.service';
import { Description } from './description.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsersService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user;
  description: Description;
  _description: Description = {
    login: '',
    bio: '',
    url: '',
    followers: 0,
    followings: 0,
  };

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.getUser();
  }

  private mapDescription(user: any) {
    return {
      ...this._description,
      login: this.user.login,
      bio: this.user.bio,
      url: this.user.html_url,
      followers: this.user.followers,
      following: this.user.following
    };
  }

  getUser(): void {
    this.usersService.getUsers()
      .subscribe((data: object) => {
        this.user = data;
        this.description = this.mapDescription(this.user);
      },
    );
  }
}
