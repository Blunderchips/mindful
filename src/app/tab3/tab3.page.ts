import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  logs: any;
  userUid = '1234';

  constructor(
    private afs: AngularFirestore
  ) {
    this.logs = this.afs.collection(this.userUid + '_data',
      ref => ref.orderBy('date')).valueChanges();
  }

  ngOnInit() {
    this.logs.subscribe((logs: any) => {
      const dataPoints = [];

      logs.forEach(i => {
        dataPoints.push({
          x: this.getDate(i.date),
          y: i.value
        });
      });

      const chart = new CanvasJS.Chart('chartContainer', {
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
            type: 'area',
            dataPoints
          }]
      });

      chart.render();
    });
  }

  getDate(ISOString: string): Date {
    return new Date(ISOString);
  }
}
