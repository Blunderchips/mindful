import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMG } from '../app.component';
import { DataServiceService } from '../data-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo = IMG;
  name: string;

  constructor(
    private router: Router,
    private data: DataServiceService,
    public toaster: ToastController,
  ) { }

  ngOnInit() {
  }

  login() {
    if (!this.name) {
      this.presentToast();
      return;
    }
    this.name = this.name.trim();
    if (!this.name) {
      this.presentToast();
      return;
    }
    this.data.changeMessage(this.name);
    console.log('login');

    if (environment.production) {
      this.router.navigateByUrl('/splash');
    } else {
      this.router.navigateByUrl('/tabs/tab1');
    }
  }

  async presentToast() {
    const toast = await this.toaster.create({
      message: 'Invalid username',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
