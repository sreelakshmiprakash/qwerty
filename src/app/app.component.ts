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
      classification: 'Confidential',
      type: 'Document',
      fileType: 'PDF',
      version: '1.0',
      fileSize: '2.5MB',
      action: 'Create new Version',
      link: 'Download',
      
    },
    {
      name: 'File 2',
      classification: 'Public',
      type: 'Image',
      fileType: 'JPEG',
      version: '2.0',
      fileSize: '1.2MB',
      action: 'Create new Version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
      action: 'Create new version',
      link: 'Download',
      
    },
    {
      name: 'File 3',
      classification: 'Restricted',
      type: 'Video',
      fileType: 'MP4',
      version: '1.5',
      fileSize: '10.3MB',
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
