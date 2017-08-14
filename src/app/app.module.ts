import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MapComponent } from '../components/map/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { PlaceProvider } from '../providers/place/place';
import { MrResultProvider } from '../providers/mr-result/mr-result';

import { MoreMenuInfoChartPage } from '../pages/details/more-menu-info-chart/more-menu-info-chart';
import { MoreMenuInfoListPage } from '../pages/details/more-menu-info-list/more-menu-info-list';
import { DetailPage } from '../pages/details/detail/detail';
import { Detail2Page } from '../pages/details/detail2/detail2';
import { Detail3Page } from '../pages/details/detail3/detail3';
import { Detail4Page } from '../pages/details/detail4/detail4';
import { Detail21Page } from '../pages/details/detail21/detail21';
import { Detail22Page } from '../pages/details/detail22/detail22';
import { Detail23Page } from '../pages/details/detail23/detail23';
import { Detail31Page } from '../pages/details/detail31/detail31';
import { Detail32Page } from '../pages/details/detail32/detail32';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { InfoPage } from '../pages/info/info';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListPage,
    MapPage,
    InfoPage,
    DetailPage,
    Detail2Page,
    Detail3Page,
    Detail4Page,
    Detail21Page,
    Detail22Page,
    Detail23Page,
    Detail31Page,
    Detail32Page,
    MapComponent,
    MoreMenuInfoChartPage,
    MoreMenuInfoListPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListPage,
    MapPage,
    InfoPage,
    DetailPage,
    Detail2Page,
    Detail3Page,
    Detail4Page,
    Detail21Page,
    Detail22Page,
    Detail23Page,
    Detail31Page,
    Detail32Page,
    MoreMenuInfoChartPage,
    MoreMenuInfoListPage,
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaceProvider,
    MrResultProvider
  ]
})
export class AppModule {}
