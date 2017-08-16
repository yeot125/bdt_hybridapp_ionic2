import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
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
window:Window;

  constructor(public nav: NavController, public iab: InAppBrowser, public platform: Platform) {
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
        let curYear= new Date().getFullYear().toString();
        let curMonth= new Date().getMonth().toString();
        let url= "https://korean.visitkorea.or.kr/kor/bz15/where/festival/festival.jsp?areaCode=31&year="+curYear+"&month="+curMonth+"&keyword=&type=&gotoPage=&listType=cdesc&cid=&out_service=&info_edit ";
        if(this.platform.is('android')){
          let browser = this.iab.create(url, '_blank', 'location=yes');
          browser.show();
        }else{
          let browser = this.iab.create(url, '_system', 'location=yes,closebuttoncaption=Done');
          browser.show();
        }
       
         
          
        
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
