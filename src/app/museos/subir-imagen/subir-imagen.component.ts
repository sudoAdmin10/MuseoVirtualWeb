import { Component } from '@angular/core';
import { MuseoService } from 'src/app/core/services/museo.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent {
  imagenSeleccionada!: File;

  constructor(private museoService: MuseoService) { }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }

  subirImagen() {
    if (!this.imagenSeleccionada) return;

    this.museoService.subirImagen(this.imagenSeleccionada).subscribe({
      next: (res) => alert('Imagen subida con éxito'),
      error: (err) => console.error('Error al subir', err),
    });
  }
}
