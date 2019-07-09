import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMG } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo = IMG;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log('login');
    this.router.navigateByUrl('/splash');
  }
}
