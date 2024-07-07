import { Component } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedFile: File | null = null;

  constructor() {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] || null;
  }

  uploadImage(withContent = false): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('name', 'avatar');
    formData.append('id', '5');
    formData.append('file', this.selectedFile);

    this.uploadToFileio(formData, withContent);
  }

  async uploadToFileio(body: FormData, withContent = false) {
    const headers: HeadersInit = {
      Accept: 'application/json',
    };
    if (withContent) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    await fetch('https://file.io', {
      method: 'POST',
      body,
      headers,
    })
      .then(async (res) => {
        console.log(`with content? ${withContent}`, await res?.json());
      })
      .catch((err) => {
        console.log(`with content? ${withContent}`, err);
      });
  }
}
