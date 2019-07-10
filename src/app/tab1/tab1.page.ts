import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastController, AlertController } from '@ionic/angular';
import { IMG } from '../app.component';
import { DataServiceService } from '../data-service.service';

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

  last = '';

  past: any;

  constructor(
    private afs: AngularFirestore,
    public toaster: ToastController,
    public alertController: AlertController,
    private date: DataServiceService
  ) { }

  ngOnInit(): void {
    // this.moods.sort((a, b) => {
    //   return a.value < b.value;sF
    // });

    this.date.currentMessage.subscribe(user => {
      this.userUid = user;

      this.afs.collection(this.userUid + '_data', ref => ref.orderBy('date')
      ).valueChanges().subscribe(asd => {
        this.past = [];
        this.past = asd.reverse().slice(0, 5).reverse();
        // console.log(this.past);
      });
    });
  }

  postMood(mood: any, type: number) {
    const uid = this.afs.createId();

    const obj = {
      user: this.userUid,
      uid,
      mood: mood.mood,
      date: new Date().toISOString(),
      value: mood.value,
      type
    };

    console.log(obj);

    this.afs.collection(this.userUid + '_data').doc(uid).set(
      obj
    );

    this.last = uid;

    // this.presentToast();
    this.presentToastWithOptions(mood, type);
  }

  async presentToast() {
    const toast = await this.toaster.create({
      message: 'Mood saved',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async presentToastWithOptions(mood: any, type: number) {
    const toast = await this.toaster.create({
      header: 'Mood saved',
      message: '',
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
          text: 'Would you like to make a comment',
          handler: () => {
            this.presentAlertPrompt({ mood, type });
          }
        }
      ]
    });
    toast.present();
  }

  getColour(mood: { mood: string; }) {
    let rtn = 'danger';
    this.moods.forEach(i => {
      if (i.mood === mood.mood) {
        rtn = i.colour;
      }
    });
    return rtn;
  }

  async presentAlertPrompt({ mood, type }: {
    mood: {
      mood: any;
      value: any;
    }; type: number;
  }) {
    const alert = await this.alertController.create({
      header: 'Why do you feel that way?',
      inputs: [
        {
          name: 'input',
          type: 'text'
          // placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            console.log('Confirm Ok');
            console.log(data);

            this.afs.collection(this.userUid + '_data').doc(this.last).delete();
            const obj = {
              user: this.userUid,
              uid: this.last,
              mood: mood.mood,
              date: new Date().toISOString(),
              value: mood.value,
              type,
              comment: data.input
            };

            console.log(obj);

            this.afs.collection(this.userUid + '_data').doc(this.last).set(
              obj
            );
          }
        }
      ]
    });

    await alert.present();
  }

}
