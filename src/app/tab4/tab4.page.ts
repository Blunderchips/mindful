import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  userUid = '1234';

  a = 0;
  b = 0;
  c = 0;

  products = {
    Bank: {

    },
    'Medical Aid': {

    },
    'Gap Cover': {

    },
    'Life_Insurance': {

    },
    'Investment': {

    },
    'Car and Home': {

    },
    'Vitality': {

    }
  };

  suggestions = [];

  constructor(
    private afs: AngularFirestore
  ) {
    this.afs.collection(this.userUid + '_data').valueChanges().subscribe(data => {
      data.forEach((i: any) => {
        switch (i.type) {
          case 0:
            this.a++;
            break;
          case 1:
            this.b++;
            break;
          case 2:
            this.c++;
            break;
        }
      });
    });
  }

  ngOnInit() {
  }

  getMax(): number {
    return Math.max(this.a, Math.max(this.b, this.c));
  }

  getSuggestion() {
    const rtn = [];

    if (this.a > 0) {
      rtn.push(this.products.Vitality);
    }
    if (this.b > 0) {
      rtn.push(this.products.Life_Insurance);
    }
    if (this.c > 0) {
      rtn.push(this.products.Investment);
    }

    console.log(rtn);
    return rtn;
  }

  isMax(n: number): boolean {
    return this.getMax() === n;
  }

  asd(): number {
    return this.isMax(this.a) ? 0 : (this.isMax(this.b) ? 1 : 2);
  }
}
