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
  
  imgList=[];
  mrRes;
  tab;
  splash=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mrResult: MrResultProvider, public http: Http, public alert: AlertController,
    public sanitizer: DomSanitizer) {
    this.tab = document.querySelector('.tabbar');
    this.mrRes = mrResult.getMRJobResultWithURL().map(res=>res.json()).subscribe((res)=>{
      this.mrRes = res;
      for (var i=0;i<15;i++){
        this.imgList[i]=res[i].url;
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
      title: this.mrRes[i].key,
      message: <any> this.sanitizer.bypassSecurityTrustHtml("<p><span name=\"thumbs-up\" style=\"display:inline-block;font-family:Ionicons;\" class=\"icon icon-md ion-md-thumbs-up\"></span>"+this.mrRes[i].value+"</p><p><img src=\""+this.imgList[i]+"\"/></p>"),
      buttons:['OK']
    });
    popUp.present();
    
  }

}
