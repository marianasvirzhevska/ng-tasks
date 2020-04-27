import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = '';

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  addName(): void {
    this.userService.addName(this.name);
    this.router.navigate(['/game']);

    this.name = '';
  }
}
