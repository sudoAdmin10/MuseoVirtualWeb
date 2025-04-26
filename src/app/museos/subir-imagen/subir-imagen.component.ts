import { Component } from '@angular/core';
import { MuseoService } from 'src/app/core/services/museo.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent {
  previewUrl: string | ArrayBuffer | null = null;
  uploadedUrl: string = '';
  API_KEY = '988c64c9642af875f58453c53c6c84b7';

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewUrl = reader.result;
      this.uploadImage(file);
    };
    reader.readAsDataURL(file);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    fetch(`https://api.imgbb.com/1/upload?key=${this.API_KEY}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.uploadedUrl = data.data.url;
        } else {
          alert('Error al subir imagen: ' + data.error.message);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Error de red');
      });
  }

  copyUrl() {
    navigator.clipboard.writeText(this.uploadedUrl)
      .then(() => alert('URL copiada'))
      .catch(err => console.error('Error al copiar:', err));
  }
}
