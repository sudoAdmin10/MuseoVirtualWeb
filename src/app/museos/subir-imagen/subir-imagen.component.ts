import { Component } from '@angular/core';
import { MuseoService } from 'src/app/core/services/museo.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent {

  constructor(private service: MuseoService,) { }


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
      .then(res => {
        if (!res.ok) throw new Error('Error en la subida');
        return res.json();
      })
      .then(data => {
        if (data.success) {
          this.uploadedUrl = data.data.url;
          this.service.subirImagen(data)
        } else {
          alert('Error al subir imagen: ' + data.error.message);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('Ocurrió un error al subir la imagen.');
      });
  }

  copyUrl() {
    navigator.clipboard.writeText(this.uploadedUrl)
      .then(() => alert('URL copiada'))
      .catch(err => console.error('Error al copiar:', err));
  }

  uploadUrl() {
    if (!this.uploadedUrl) {
      alert('No hay una URL para subir');
      return;
    }

    this.service.subirImagen(this.uploadedUrl).subscribe(
      (response) => {
        console.log('Imagen guardada en la base de datos:', response);
        alert('Imagen guardada exitosamente');
      },
      (error) => {
        console.error('Error al guardar la imagen:', error);
        alert('Error al guardar la imagen en la base de datos');
      }
    );
  }
}
