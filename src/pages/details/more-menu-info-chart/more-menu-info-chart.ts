import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MrResultProvider } from '../../../providers/mr-result/mr-result';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-more-menu-info-chart',
  templateUrl: 'more-menu-info-chart.html',
})
export class MoreMenuInfoChartPage {  
  mrRes=[];
  chartOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public mrResult: MrResultProvider) {
    mrResult.getMRJobResult().map(res=>res.json()).subscribe((res)=>{
        for(var i=0;i<20;i++){
            this.mrRes[i]=res[i];
        }
        this.chartOptions={
            chart: {
                   plotBackgroundColor: null,
                   plotBorderWidth: null,
                   plotShadow: false,
                   type: 'pie',
                   width:300,
                   height:500,
               },
               title: {
                   text: '음식 인기 통계'
               },
               tooltip: {
                   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
               },
               plotOptions: {
                   pie: {
                       allowPointSelect: true,
                       cursor: 'pointer',
                       dataLabels: {
                           enabled: false
                       },
                       showInLegend: true
                   }
               },
               series: [{
                   name: '좋아요',
                   colorByPoint: true,
                   data: this.mrRes
               }] 
           }
    });
  }

}
