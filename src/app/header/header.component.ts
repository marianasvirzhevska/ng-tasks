import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string;
  auth;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.auth = this.userService.auth;
  }

}
