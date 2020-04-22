import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addName(): void {
    this.userService.addName(this.name);
    this.name = '';
  }
}
