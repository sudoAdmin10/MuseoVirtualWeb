import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images = [
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
}
