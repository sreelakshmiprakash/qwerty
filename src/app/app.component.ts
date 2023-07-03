import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDiv = false;

  title = 'qwerty';
  tableData = [
    {
      id: '1',
      name: 'File 1',
      classification: 'Internal',
      type: 'Confidential',
      fileType: 'PDF',
      version: '1.0',
      fileSize: '2.5MB',
      action: 'Create new Version',
      link: 'Download',
    },
    {
      id: '2',
      name: 'File 2',
      classification: 'Internal',
      type: 'Public',
      fileType: 'Png',
      version: '2.0',
      fileSize: '1.2MB',
      action: 'Create new Version',
      link: 'Download',
    },
    {
      id: '3',
      name: 'File 3',
      classification: 'External',
      type: 'Public',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '4',
      name: 'File 4',
      classification: 'External',
      type: 'Public',
      fileType: 'Pdf',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '5',
      name: 'File 5',
      classification: 'External',
      type: 'Public',
      fileType: 'Pdf',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '6',
      name: 'File 3',
      classification: 'External',
      type: 'Public',
      fileType: 'Pdf',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '7',
      name: 'File 3',
      classification: 'External',
      type: 'Public',
      fileType: 'Pdf',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '8',
      name: 'File 3',
      classification: 'External',
      type: 'Restricted',
      fileType: 'Pdf',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '9',
      name: 'File 3',
      classification: 'External',
      type: 'Restricted',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '10',
      name: 'File 3',
      classification: 'External',
      type: 'Restricted',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '11',
      name: 'File 3',
      classification: 'External',
      type: 'Secret',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
    {
      id: '12',
      name: 'File 3',
      classification: 'External',
      type: 'Secret',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '200kb',
      action: 'Create new version',
      link: 'Download',
    },
  ];
  filteredData = [...this.tableData];
  applyFilter(selectedArray: any) {
   
    if (selectedArray?.classification) {
      this.filteredData = this.tableData.filter(
        (item) => item.classification === selectedArray.classification
      );
    } 
    // if (selectedArray?.type) {
    //   this.filteredData = this.tableData.filter(
    //     (item) => item.type === selectedArray.type
    //   );
    // } 
    // if (selectedArray?.fileType) {
    //   this.filteredData = this.tableData.filter(
    //     (item) => item.fileType === selectedArray.fileType
    //   );
    // } 
    else {
      this.filteredData = [...this.tableData];
    }
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}
