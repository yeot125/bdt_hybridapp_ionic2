import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { MapPage } from '../map/map';
import { InfoPage } from '../info/info';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  listTab = ListPage;
  mapTab = MapPage;
  infoTab = InfoPage;


  constructor() {
    
  }

}
