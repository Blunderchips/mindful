import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

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
      icon: 'happy'
    },
    {
      mood: 'sad',
      icon: 'sad'
    },
    {
      mood: 'depressed',
      icon: 'sad'
    },
    {
      mood: 'tierd',
      icon: 'sad'
    }
  ];

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {

  }

  postMood(mood: string) {
    let uid = this.afs.createId();
    this.afs.collection(this.userUid + '_data').add(
      {
        user: this.userUid,
        uid: uid,
        mood: mood,
        date: new Date()
      }
    );
  }
}
