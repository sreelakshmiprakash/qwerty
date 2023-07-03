import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  
  columnNames: any = [
    'name',
    'classification',
    'type',
    'fileType',
    'version',
    'fileSize',
    'action',
    'link',
  ];
  columnVisibility: any = {
    name: true,
    classification: true,
    type: true,
    fileType: true,
    version: true,
    fileSize: true,
    action: true,
    link: true,
  };
  @Input()
  data!: any[];
  @Input()
  showDiv!: boolean;
  pIndex: any = 0;
  pSize: any = 10;
  currentPage = 0;
  searchKeyword: any;
  dataSize: number[] = [10, 50, 100, 200];
 
  constructor() {
    
  }
  ngOnInit() {}
  changePage({
    pageIndex,
    pageSize,
  }: {
    pageIndex?: number;
    pageSize?: number;
  }) {
    this.pSize = pageSize;
    this.pIndex = pageIndex;
  }

  toggleColumnVisibility(column: string) {
    this.columnVisibility[column] = !this.columnVisibility[column];
  }
}
