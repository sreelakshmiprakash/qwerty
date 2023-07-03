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
  applyFilter(selectedValue: string) {
 
    if (selectedValue) {
      this.filteredData = this.tableData.filter(
        (item) => item.classification === selectedValue
      );
    } else {
      this.filteredData = [...this.tableData];
    }
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

 
}
