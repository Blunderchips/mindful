import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  userUid = '1234';
  moods = [
    {
      mood: 'happy',
      icon: 'happy',
      value: 5
    },
    {
      mood: 'sad',
      icon: 'sad',
      value: 3
    },
    {
      mood: 'depressed',
      icon: 'sad',
      value: 1
    },
    {
      mood: 'tierd',
      icon: 'sad',
      value: 2
    }
  ];

  constructor(
    private afs: AngularFirestore,
    public toaster: ToastController
  ) { }

  ngOnInit(): void {
  }

  postMood(mood: any) {
    let uid = this.afs.createId();

    const obj = {
      user: this.userUid,
      uid,
      mood: mood.mood,
      date: new Date().toISOString(),
      value: mood.value
    };

    console.log(obj);

    this.afs.collection(this.userUid + '_data').doc(uid).set(
      obj
    );

    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toaster.create({
      message: 'Mood saved',
      duration: 2000
    });
    toast.present();
  }
}
