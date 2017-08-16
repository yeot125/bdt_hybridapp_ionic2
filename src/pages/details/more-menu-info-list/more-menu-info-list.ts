import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MrResultProvider } from '../../../providers/mr-result/mr-result';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-more-menu-info-list',
  templateUrl: 'more-menu-info-list.html',
})
export class MoreMenuInfoListPage {
  

  mrRes;
  searched;
  filterKeyword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public mrResult: MrResultProvider) {
    mrResult.getMRJobResultWithURL().map(res=>res.json()).subscribe((res)=>{
      this.mrRes = res;
      this.searched=res;
    });
  }

  keyPressed(e) {
    this.searched = this.mrRes.filter(item=>item.key.toLowerCase().includes(this.filterKeyword.toLowerCase()));
  }

}
