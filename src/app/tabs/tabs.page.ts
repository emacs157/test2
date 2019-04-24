import { Component } from '@angular/core';
import {UserproviderService} from '../providers/userprovider.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    private userprovider: UserproviderService,
  ) {

  }
}
