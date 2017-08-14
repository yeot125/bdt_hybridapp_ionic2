import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Detail31Page } from '../detail31/detail31';
import { Detail32Page } from '../detail32/detail32';

@IonicPage()
@Component({
  selector: 'page-detail3',
  templateUrl: 'detail3.html',
})
export class Detail3Page {

  items = [];

  constructor(public nav: NavController) {

    this.items = [
      {
        'num' : '1',
        'title': '푸드트럭 튜닝절차'
      },
      {
        'num' : '2',
        'title': '제작차량 등록절차'
      }
    ]
  }

  openDetailPage(item) {
      switch (item.num){
        case "1" :
        this.nav.push(Detail31Page, { item: item });
        break;
        case "2" :
        this.nav.push(Detail32Page, { item: item });
        break;
      }
  }

}
