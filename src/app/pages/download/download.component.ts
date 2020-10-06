import { Component, OnInit } from '@angular/core';
import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
export class DownloadComponent implements OnInit {
  enviroment = 'http://localhost:8080';
  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  onDownloadExcel() {
    this.fileService
      .download(this.enviroment + 'downloadExcel')
      .subscribe((res: any) => {
        this.fileService.handleFile(res, 'report.xlsx');
      });
  }

  onDownloadPDF() {}
}
