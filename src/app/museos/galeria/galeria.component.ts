import { Component } from '@angular/core';
import { MuseoService } from 'src/app/core/services/museo.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  constructor(private museumService: MuseoService) { }


  imgs = [
    { src: 'assets/img/m13.jpg', size: 'medium' },
    { src: 'assets/img/m14.jpg', size: 'small' },
    { src: 'assets/img/m3.jpg', size: 'medium' },
    { src: 'assets/img/m4.jpg', size: 'large' },
    { src: 'assets/img/m5.jpg', size: 'small' },
    { src: 'assets/img/m6.jpg', size: 'medium' },
    { src: 'assets/img/m7.jpg', size: 'large' },
    { src: 'assets/img/m8.jpg', size: 'small' },
    { src: 'assets/img/m9.jpg', size: 'medium' },
    { src: 'assets/img/m10.jpg', size: "large" },
    { src: 'assets/img/m11.jpg', size: 'large' },
    { src: 'assets/img/m12.jpg', size: 'small' },
  ];


  images: { src: string; size: string }[] = [];


  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.museumService.obtenerImagenes().subscribe({
      next: (data: any[]) => {
        this.images = data.map((image) => ({
          src: image.url,
          size: this.getRandomSize(),
        }));
      },
      error: (err) => {
        console.error('Error al cargar las imágenes:', err);
      },
    });
  }

  getRandomSize(): string {
    const sizes = ['small', 'medium', 'large'];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }
}
