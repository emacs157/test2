import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({templateUrl: 'teachers.component.html'})
export class TeachersComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;

    columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true,resizable:true},
        {headerName: 'Model', field: 'model', sortable: true, filter: true,resizable:true},
        {headerName: 'Price', field: 'price', sortable: true, filter: true,resizable:true}
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}
