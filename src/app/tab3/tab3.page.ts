import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  logs: any;
  userUid = '1234';

  constructor(
    private afs: AngularFirestore,
    private date: DataServiceService,
    private router: Router
  ) {
    this.date.currentMessage.subscribe(user => {
      this.userUid = user;
      this.logs = this.afs.collection(this.userUid + '_data',
        ref => ref.orderBy('date')).valueChanges();
    });
  }

  ngOnInit() {

    this.date.currentMessage.subscribe(user => {
      if (!user) {
        this.router.navigateByUrl('/login');
      }

      this.userUid = user;

      this.logs.subscribe((logs: any) => {
        const dataPoints = [];

        logs.forEach((i: { date: string; value: number; }) => {
          dataPoints.push({
            // x: this.getDate(i.date),
            y: i.value
          });
        });

        // console.log(dataPoints);

        const chart = new CanvasJS.Chart('chartContainer1', {
          zoomEnabled: true,
          animationEnabled: true,
          exportEnabled: true,
          // title: {
          //   text: 'Performance Demo - 10000 DataPoints'
          // },
          // subtitles: [{
          //   text: 'Try Zooming and Panning'
          // }],
          data: [
            {
              type: 'spline',
              dataPoints,
              markerSize: 5,
              // xValueType: 'dateTime'
            }]
        });

        chart.render();
      });
    });

  }

  getDate(ISOString: string): Date {
    return new Date(ISOString);
  }

  getToString(date: Date): string {
    return date.getFullYear() + '-' + (date.getMonth() + 1)
      + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
      + ':' + date.getSeconds();
  }

  remove(log: { uid: string }) {
    console.log(log);
    this.afs.collection(this.userUid + '_data').doc(log.uid).delete();
  }
}
