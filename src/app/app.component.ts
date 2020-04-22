import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-homework';
  auth = false;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.auth = this.userService.auth;
  }
}
