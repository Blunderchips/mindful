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
    this.logs = this.afs.collection(this.userUid + '_data').valueChanges();
  }

  ngOnInit() {
    let dataPoints = [];
    let y = 0;
    for (var i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y });
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Performance Demo - 10000 DataPoints"
      },
      subtitles: [{
        text: "Try Zooming and Panning"
      }],
      data: [
        {
          type: "line",
          dataPoints: dataPoints
        }]
    });

    chart.render();
  }
}
