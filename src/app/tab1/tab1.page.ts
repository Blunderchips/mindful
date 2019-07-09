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
      mood: 'ecstatic',
      icon: 'happy',
      value: 5,
      emoji: '🤩',
      colour: 'danger'
    },
    {
      mood: 'Happy',
      icon: 'happy',
      value: 4,
      emoji: '😁',
      colour: 'danger'
    },
    {
      mood: 'Meh',
      icon: 'Meh',
      value: 3,
      emoji: '😐',
      colour: 'danger'
    },
    {
      mood: 'sad',
      icon: 'sad',
      value: 2,
      emoji: '😣',
      colour: 'danger'
    },
    {
      mood: 'depressed',
      icon: 'sad',
      value: 1,
      emoji: '😔',
      colour: 'danger'
    }
    // ,
    // {
    //   mood: 'tierd',
    //   icon: 'sad',
    //   value: 2,
    //   emoji: '😴'
    // }
  ];

  constructor(
    private afs: AngularFirestore,
    public toaster: ToastController
  ) { }

  ngOnInit(): void {
    // this.moods.sort((a, b) => {
    //   return a.value < b.value;
    // });
  }

  postMood(mood: any) {
    const uid = this.afs.createId();

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
