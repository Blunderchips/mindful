import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private afs: AngularFirestore
  ) { }

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
