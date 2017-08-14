import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MrResultProvider } from '../../../providers/mr-result/mr-result';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-more-menu-info-chart',
  templateUrl: 'more-menu-info-chart.html',
})
export class MoreMenuInfoChartPage {
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

  
  mrRes;
  chartOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public mrResult: MrResultProvider) {
    this.mrRes = mrResult.getMRJobResult();
    var str = JSON.stringify(this.testList);
    str = str.split("key").join("name");
    str = str.split("value").join("y");
    var converted  = JSON.parse(str);
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
            data: converted
        }] 
    }
  }

}
