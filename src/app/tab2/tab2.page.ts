import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as CanvasJS from '../canvasjs.min';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  userUid = '1234';

  selected = {};
  logs = [];

  constructor(
    public alertController: AlertController,
    private afs: AngularFirestore,
    private date: DataServiceService
  ) { }

  ngOnInit(): void {

    this.date.currentMessage.subscribe(user => {

      this.userUid = user;

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
            dataPoints,
            click: (evt: any) => { this.click(evt); }
          }]
        });

        chart.render();
      });
      
    });
  }

  click(evt: any) {
    const { label, exploded } = evt.dataPoint;
    this.selected[label] = exploded;

    this.afs.collection(this.userUid + '_data').valueChanges().subscribe(logs => {

      this.logs = [];

      logs.forEach((i: any) => {
        if (this.selected[`${i.mood}`]) {
          this.logs.push(i);
        }
      });

      this.logs.sort((a: { date: string }, b: { date: string }) => {
        return b.date.localeCompare(a.date);
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

  getComment(mood: { comment: string; }): string {
    return !mood.comment ? '' : mood.comment;
  }
}

