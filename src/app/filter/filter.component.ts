import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  
  @Output() filter = new EventEmitter<any>();
  @Output() toggleDivEvent = new EventEmitter<void>();
  selectedValue = '';
  selectedType = '';
  viewFilter = false;
  showDiv = false;  
  selectedFileType = '';
  selectedSize = '';
 

  constructor() {}

  ngOnInit() {}
  filterData() {
    const selectedData: any = {
      classification: this.selectedValue,
      type: this.selectedType,
      fileType: this.selectedFileType,
      fileSize: this.selectedSize,
    };
    this.filter.emit(selectedData);
    console.log('value', selectedData);
  }

  toggleDivVisibility() {
    this.viewFilter = !this.viewFilter;
  }
  toggleColumn() {
    this.toggleDivEvent.emit();
  }
}
