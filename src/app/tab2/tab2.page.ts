import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as CanvasJS from '../canvasjs.min';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  userUid = '1234';

  constructor(
    public alertController: AlertController,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {

    this.afs.collection(this.userUid + '_data').valueChanges().subscribe(logs => {

      let tuna = [];
      let total = 0;

      logs.forEach((i: any) => {
        if (!tuna[`${i.mood}`]) {
          tuna[`${i.mood}`] = 0;
        }
        tuna[`${i.mood}`]++;
        total++;
      });


      let dataPoints = [];

      // tslint:disable-next-line: forin
      for (const key in tuna) {
        const value = tuna[key];
        console.log(key, value);
        dataPoints.push(
          { y: (value / total), label: key },
        );
      }

      const chart = new CanvasJS.Chart('chartContainer2', {
        animationEnabled: true,
        // title: {
        //   text: 'Desktop Search Engine Market Share - 2016'
        // },
        data: [{
          type: 'pie',
          startAngle: 240,
          yValueFormatString: '##0.00"%"',
          indexLabel: '{label} {y}',
          dataPoints
        }]
      });

      chart.render();
    });
  }
}
