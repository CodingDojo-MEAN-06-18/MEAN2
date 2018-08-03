import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models';

import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(value: User) {
    this.auth.register(value).subscribe(user => {
      this.router.navigateByUrl('books');
    });
  }
}
