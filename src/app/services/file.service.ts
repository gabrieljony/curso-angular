import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json',
      // reportProgress,
      // content-length
    });
  }

  handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type,
    });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;

    // link.click();
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    setTimeout(() => {
      // firefox
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
