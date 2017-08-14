import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DetailPage } from '../details/detail/detail';
import { Detail2Page } from '../details/detail2/detail2';
import { Detail3Page } from '../details/detail3/detail3';
import { Detail4Page } from '../details/detail4/detail4';
import { MoreMenuInfoListPage } from '../details/more-menu-info-list/more-menu-info-list';
import { MoreMenuInfoChartPage } from '../details/more-menu-info-chart/more-menu-info-chart';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  
items = [];

  constructor(public nav: NavController) {

    this.items = [
      {
        'num' : '1',
        'title': '합법 푸드트럭이란?'
      },
      {
        'num' : '2',
        'title': '영업신고 절차'
      },
      {
        'num' : '3',
        'title': '푸드트럭 차량 튜닝 및 등록'
      },
      {
        'num' : '4',
        'title': '푸드트럭 영업 위생수칙'
      },
      {
        'num' : '5',
        'title': '푸드트럭 모집공고'
      },
      {
        'num' : '6',
        'title': '메뉴 리스트 더 보기'
      },
      {
        'num' : '7',
        'title' : '통계 차트 보기'
      }
    ]
  }

  openDetailPage(item) {
      switch (item.num){
        case "1" :
        this.nav.push(DetailPage, { item: item });
        break;
        case "2" :
        this.nav.push(Detail2Page, { item: item });
        break;
        case "3" :
        this.nav.push(Detail3Page, { item: item });
        break;
        case "4" :
        this.nav.push(Detail4Page, { item: item });
        break;
        case "5" :
        window.open('http://www.moi.go.kr/frt/bbs/type001/commonSelectBoardList.do?bbsId=BBSMSTR_000000000267','_blank','closebuttoncation=Close');
        break;
        case "6" :
        this.nav.push(MoreMenuInfoListPage, { item: item });
        break;
        case "7" :
        this.nav.push(MoreMenuInfoChartPage, { item: item });
        break;
       }
  }
}
