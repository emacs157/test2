import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

import { Observable } from 'rxjs';
import {UserproviderService} from '../../providers/userprovider.service';
import {defaultLanguage, defaultURL, menuOptions} from '../../providers/i18n-demo.constants';

import {BigeventproviderService} from '../../providers/bigeventprovider.service';

@Component({
    selector: 'app-bigevent',
    templateUrl: './bigevent.page.html',
    styleUrls: ['./bigevent.page.scss'],
})
export class BigeventPage implements OnInit {

    public bigevents: any = [];
    public grids
    page = 1
    point;
    category = null;
    infiniteScrollEnd = false
    alreadyLoggedIn = false;
    validation: any = {};
    BC;
    keyword
    bigeventLoaded = false

    constructor(
        private http: HttpClient,
        private userprovider: UserproviderService,
        private translate: TranslateService,
        private bigeventprovider: BigeventproviderService,
    ) {
      this.getMenu()
      this.getBigevents()
    }

    getMenu(){
        this.userprovider.getMenu().subscribe((res : any[])=>{
            this.grids = res;
        });
    }

    getBigevents() {
        this.bigeventprovider.get(this.keyword, this.page, this.category, null, null).subscribe((res : any[])=>{
            console.log(res)
            if (Object.keys(res).length == 0) {
                this.page -= 1
            }
            this.bigevents = this.bigevents.concat(res)
            this.bigeventLoaded = true
        });
    }

    openBigeventDetailsPage(bigevent){}

    translateMenu(menuItemName) {
        let returnData = menuItemName;
        this.translate.get(menuItemName).subscribe(response => {
            returnData = response
        })
        return returnData
    }

    search(ev) {
        var val = ev.target.value;

        this.page = 1
        console.log(val)
        this.bigeventprovider.get(val, this.page, null, null, null)
            .subscribe((res : any[])=>{
                this.bigevents = res
                if (typeof res === 'object') {
                    if (Object.keys(res).length == 0) {
                        this.page -= 1
                    }
                }
                console.log(this.bigevents)
            })
    }


    ngOnInit() {
    }

}
