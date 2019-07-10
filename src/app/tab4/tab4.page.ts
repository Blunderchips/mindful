import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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
    bank: {
      title: 'Bank',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'It’s time to bank healthier with Discovery. We\'ll work with you to help you improve your Vitality Money points and status. You’ll get personal money goals that are based on your unique financial profile. Through your personal money goals, you can improve your financial knowledge, work towards increasing your savings, and track your progress easily. Join now and ensure that you reach your Vitality Retirement Age.',
      img: 'https://i.imgur.com/5pHEOwd.png',
      url: 'https://www.discovery.co.za/bank/faq'
    },
    medical: {
      title: 'Medical Aid',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'One of the strategic priorities is to drive value-based healthcare, a delivery model which places members at the centre of care. In such a model, providers are reimbursed based on health outcomes, not inputs. This ensures that it is the health results that matter, not the volume of services delivered. This approach gives our members access to programmes and providers that are committed to continuous improvement in quality healthcare.  Through Discovery Health, you will be deeply engaged in many quality of care initiatives and ongoing monitoring to ensure our members have access to the safest, most efficient healthcare available in South Africa. The scheme also empowers our members with information that is relevant to their needs.',
      img: '',
      url: 'https://www.discovery.co.za/medical-aid/our-medical-aid-plans'
    },
    life: {
      title: 'Life Insurance',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'The Smart PayBack Fund on Comprehensively Integrated Smart Life Plans, allows you to receive up to 100% of your qualifying Smart Life Plan premiums back for managing your health and wellness and driving well. With the information we receive from Vitality and Vitality Drive, we can measure your level of health and wellness and your driving behaviour. Utilising this information, we will add a percentage of your premiums to your Smart PayBack Fund each year.',
      img: 'https://imgur.com/0saSvK0.png',
      url: 'https://www.discovery.co.za/life-insurance/'
    },
    gap: {
      title: 'Gap Cover',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'Covers tariff shortfalls on approved in-hospital specialist claims, specific out-of-hospital costs related to approved hospital admission and shortfalls on approved emergency international claims while travelling outside of South Africa. You also get cover for co-payments on approved endoscopies, MRI and CT scans, and cancer-related claims. Your cover depends on the Discovery Gap Cover option you choose. An overall annual limit of R157 500 applies to each person.',
      img: 'https://imgur.com/uGfsP6u.png',
      url: 'https://www.discovery.co.za/gap/gap-cover-products'
    },
    investment: {
      title: 'Investment',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'Our investment solutions make investing more rewarding for you. Whether you’re putting money away for a trip to France, making sure you’ll have enough to pay for your children’s university fees, or investing for retirement, we make your investment journey easier.  Some of the reasons people don’t reach their investment goals include not saving enough, not starting early enough, not preserving their savings and withdrawing too much in retirement. We understand these challenges, and we make investing more rewarding when you take steps to improve your financial behaviour.',
      img: 'https://imgur.com/616XFhN.png',
      url: 'https://www.discovery.co.za/investments/invest-with-discovery'
    },
    vitality1: {
      title: 'Vitality',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'Half-price movies at Ster-Kinekor, savings on your monthly gym fees at Virgin Active or Planet Fitness, local and international travel rewards with British Airways, kulula.com, Emirates and Qantas, cash back on your groceries at Pick n Pay or Woolworths and more. Being healthier, driving well and banking well has never been more rewarding.',
      img: 'https://imgur.com/bia53Hg.png',
      url: 'https://www.discovery.co.za/vitality/join-today'
    },
    vitality2: {
      title: 'Vitality',
      // tslint:disable-next-line: max-line-length
      descriptoin: 'Save up to 75% on flights in terms of local, regional and international destinations with British Airways, kulula.com, Emirates and Qantas. Vitality Health members save up to 35% on local, regional and international flights. Boost your Vitality travel saving by up to an additional 40% as a Vitality Health member and a Discovery Bank client with the Vitality Money programme.',
      img: 'https://imgur.com/bia53Hg.png',
      url: 'https://www.discovery.co.za/vitality/join-today'
    }
  };

  suggestions = [];

  constructor(
    private afs: AngularFirestore,
    private date: DataServiceService,
    private router: Router,
    private iab: InAppBrowser
  ) {

    this.date.currentMessage.subscribe(user => {
      if (!user) {
        this.router.navigateByUrl('/login');
      }

      this.userUid = user;

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
    });
  }

  ngOnInit() {
  }

  getMax(): number {
    return Math.max(this.a, Math.max(this.b, this.c));
  }

  getSuggestion() {
    const rtn = [];

    switch (this.asd()) {
      case 0:
        rtn.push(this.products.vitality1);
        rtn.push(this.products.vitality2);
        break;
      case 1:
        rtn.push(this.products.medical);
        rtn.push(this.products.life);
        rtn.push(this.products.gap);
        break;
      case 2:
        rtn.push(this.products.bank);
        rtn.push(this.products.investment);
        break;
    }

    return rtn.sort(() => Math.random() - 0.5);;
  }

  isMax(n: number): boolean {
    return this.getMax() === n;
  }

  asd(): number {
    return this.isMax(this.a) ? 0 : (this.isMax(this.b) ? 1 : 2);
  }

  open(url: string) {
    this.iab.create(url);
  }
}
