import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  
  @Output() filter = new EventEmitter<string>();
  @Output() toggleDivEvent = new EventEmitter<void>();
  selectedValue = '';
  selectedType = '';
  viewFilter = false;
  showDiv = false;  
  selectedFileType = '';
  selectedSize = '';
  selectedData: any = {
    classification: this.selectedValue,
    type: this.selectedType,
    fileType: this.selectedFileType,
    fileSize: this.selectedSize,
  };

  constructor() {}

  ngOnInit() {}
  filterData() {
    this.filter.emit(this.selectedValue);
    console.log('value', this.selectedValue);
  }

  toggleDivVisibility() {
    this.viewFilter = !this.viewFilter;
  }
  toggleColumn() {
    this.toggleDivEvent.emit();
  }
}
