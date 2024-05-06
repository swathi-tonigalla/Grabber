import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lookUpFiles: File[] = []

  constructor(private http: HttpClient) {}
  onFileChange(pFileList: any, groupName: string) {
    pFileList = pFileList.files;
    for (let i = 0; i < pFileList.length; i++) {
      this.lookUpFiles.push(pFileList[i]);

    }
    

    }
    fileUpload() {
      console.log('test');
      // for (var item of this.lookUpFiles) {
      //   console.log(item.name);
      //   this.fileUpload(item);
      // }
      this.uploadFile(this.lookUpFiles);
    }

    uploadFile(files: File[]): Observable<HttpEvent<any>> {
      console.log(files)
      const formData: FormData = new FormData();
      for (let file of files) {
        
        formData.append('formFile', file)
      }
        var uri = 'https://localhost:7294/api/File/acupload';
      const req = new HttpRequest('POST', `${uri }`, formData);
      return this.http.request(req);
    }
    // getAllIssues(): void {
    //   this.httpClient.post('').subscribe(data => {
    //       this.dataChange.next(data);
    //     },
    //     (error: HttpErrorResponse) => {
    //     console.log (error.name + ' ' + error.message);
    //     });
    // }

  }

