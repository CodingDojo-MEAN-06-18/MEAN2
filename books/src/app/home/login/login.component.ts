import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models';

import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  errors: string[] = [];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(value: User) {
    this.auth.login(value).subscribe(user => {
      this.router.navigateByUrl('books');
    });
  }
}
