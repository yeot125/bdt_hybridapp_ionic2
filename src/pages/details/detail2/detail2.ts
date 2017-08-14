import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Detail21Page } from '../detail21/detail21';
import { Detail22Page } from '../detail22/detail22';
import { Detail23Page } from '../detail23/detail23';

@IonicPage()
@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html',
})
export class Detail2Page {

  items = [];

  constructor(public nav: NavController) {

    this.items = [
      {
        'num' : '1',
        'title': '최초영업시 영업신고절차'
      },
      {
        'num' : '2',
        'title': '이동영업시 신고절차'
      },
      {
        'num' : '3',
        'title': '변경신고 및 폐업신고'
      }
    ]
  }

  openDetailPage(item) {
      switch (item.num){
        case "1" :
        this.nav.push(Detail21Page, { item: item });
        break;
        case "2" :
        this.nav.push(Detail22Page, { item: item });
        break;
        case "3" :
        this.nav.push(Detail23Page, { item: item });
        break;
      }
  }
}
