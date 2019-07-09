import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastController } from '@ionic/angular';
import { IMG } from '../app.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  img = IMG;

  userUid = '1234';
  moods = [
    {
      mood: 'ecstatic',
      icon: 'happy',
      value: 3,
      emoji: '🤩',
      colour: 'primary'
    },
    {
      mood: 'Happy',
      icon: 'happy',
      value: 2,
      emoji: '😁',
      colour: 'secondary'
    },
    {
      mood: 'Fine',
      icon: 'happy',
      value: 2,
      emoji: '🙂',
      colour: 'tertiary'
    },
    {
      mood: 'Meh',
      icon: 'Meh',
      value: 0,
      emoji: '😐',
      colour: 'success'
    },
    {
      mood: 'sad',
      icon: 'sad',
      value: 1,
      emoji: '😣',
      colour: 'warning'
    },
    {
      mood: 'depressed',
      icon: 'sad',
      value: -2,
      emoji: '😔',
      colour: 'danger'
    }
  ];

  past: any;

  constructor(
    private afs: AngularFirestore,
    public toaster: ToastController
  ) { }

  ngOnInit(): void {
    // this.moods.sort((a, b) => {
    //   return a.value < b.value;s
    // });

    this.afs.collection(this.userUid + '_data', ref => ref.orderBy('date')
    ).valueChanges().subscribe(asd => {
      this.past = [];
      this.past = asd.reverse().slice(0, 5).reverse();
      // console.log(this.past);
    });
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

    // this.presentToast();
    this.presentToastWithOptions();
  }

  async presentToast() {
    const toast = await this.toaster.create({
      message: 'Mood saved',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toaster.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  getColour(mood: { mood: string; }) {
    let rtn = 'danger'
    this.moods.forEach(i => {
      if (i.mood === mood.mood) {
        // console.log(i.mood === mood.mood, i.mood, mood.mood, i.colour);
        rtn = i.colour;
      }
    });
    return rtn;
  }
}
