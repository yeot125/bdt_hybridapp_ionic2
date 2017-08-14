import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MrResultProvider } from '../../providers/mr-result/mr-result';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  
  testList=[
    {key:"떡볶이",value:16},
    {key:"부리또",value:15},
    {key:"피자",value:14},
    {key:"치킨",value:13},
    {key:"꼬치",value:12},
    {key:"훈제오리",value:11},
    {key:"닭갈비",value:10},
    {key:"햄버거",value:9},
    {key:"스테이크",value:8},
    {key:"쌀국수",value:7},
    {key:"타코야끼",value:6},
    {key:"오코노미야끼",value:5},
    {key:"장어덮밥",value:4},
    {key:"제육덮밥",value:3},
    {key:"연어",value:2},
    {key:"참치회",value:1},
  ]
  testImgURL=[];
  
  mrRes;
  tab;
  splash=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mrResult: MrResultProvider, public http: Http, public alert: AlertController,
    public sanitizer: DomSanitizer) {
    this.tab = document.querySelector('.tabbar');
    this.mrRes = mrResult.getMRJobResultWithURL().map(res=>res.json()).subscribe((res)=>{
      console.log(res);
    });
    this.http.get('assets/food_list/food_list.json').map(res => res.json())
    .subscribe((res)=>{
      for(var i=0;i<this.testList.length;i++){
        for(var j=0;j<res.length;j++){
          if(this.testList[i].key==res[j].name){
            this.testImgURL[i]=(res[j].url)
            break;
          }
        }
      }
    });
  }

  ionViewDidLoad() {
    this.tab.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tab.style.display = 'flex';
    }, 2000);
  }

  clickImg(i){
    let popUp = this.alert.create({
      title: this.testList[i].key,
      message: <any> this.sanitizer.bypassSecurityTrustHtml("<p><span name=\"thumbs-up\" style=\"display:inline-block;font-family:Ionicons;\" class=\"icon icon-md ion-md-thumbs-up\"></span>"+this.testList[i].value+"</p><p><img src=\""+this.testImgURL[i]+"\"/></p>"),
      buttons:['OK']
    });
    popUp.present();
    
  }

}
