import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

import { Observable } from 'rxjs';
import {UserproviderService} from '../../providers/userprovider.service';
import {defaultLanguage, defaultURL, menuOptions} from '../../providers/i18n-demo.constants';


@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.page.html',
    styleUrls: ['./teacher.page.scss'],
})

export class TeacherPage implements OnInit {

    public menu1: any = [];
    public menu2: any = [];
    public menu3 = [];
    public menu4 = [];
    private grids  = [];
    private teachers  = [];

    page = 1
    category = null
    id = undefined
    certificates = []
    userLevel = 2
    keyword = null
    teacherLoaded = false
    orgId = null;


    // {"menu": [
    //           [{
    //             "id": 5,
    //             "name": "beauty",
    //             "icon": "ios-chatboxes",
    //             "color": "silver",
    //             "category": "beauty",
    //             "sub": [{
    //               "menu": [
    //                 [{
    //                   "id": 51,
    //                   "name": "skinCare",
    //                   "category": "skinCare",
    //                   "color": "lightgreen"
    //                 }]
    //               ]
    //             }]
    //           }]
    //         ]
    //       }

    constructor(
        private http: HttpClient,
        private userprovider: UserproviderService,
        private translate: TranslateService,
    ) {
        this.getMenu()
        this.getTeachers()

    }

    ngOnInit() {
    }

    getMenu(){
        this.userprovider.getMenu().subscribe((res : any[])=>{
            this.grids = res;
        });
    }

    getTeachers() {
        this.userprovider.get(this.keyword, this.page, this.category, null, this.orgId).subscribe((res : any[])=>{
            console.log(res)
            if (Object.keys(res).length == 0) {
                this.page -= 1
            }
            this.teachers = this.teachers.concat(res)

            this.teachers.forEach((teacherElement, index) => {
                if (teacherElement.certificates) {
                    if (teacherElement.certificates.length > 0) {
                        this.teachers[index].certificateArray = []
                        this.teachers[index].certificates.forEach((certificateElement, certificateIndex) => {
                            this.teachers[index].certificateArray.push(certificateElement.id)
                        })
                    }
                }

            })
            this.teacherLoaded = true
        });
    }

    openTeacherDetailsPage(teacher){}

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
        this.userprovider.get(val, this.page, null, null, this.orgId)
            .subscribe((res : any[])=>{
                this.teachers = res
                if (typeof res === 'object') {
                    if (Object.keys(res).length == 0) {
                        this.page -= 1
                    }
                }
                console.log(this.teachers)
            })
    }




}
