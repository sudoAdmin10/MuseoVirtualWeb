import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
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

  museo = {
    nombre: "Museo Universitario de Montemorelos",
    lema: "Preservando nuestra historia, inspirando el futuro",
    horario: "Martes a Domingo: 9:00 AM - 5:00 PM",
    contacto: {
      telefono: "(826) 263-0000",
      email: "museo@universidad.edu.mx",
      direccion: "Av. Universidad #123, Montemorelos, NL"
    }
  };

  // Secciones destacadas
  secciones = [
    {
      titulo: "Nuestra Historia",
      icono: "history",
      contenido: "Fundado en 1985, nuestro museo custodia el legado cultural y académico de la región. Desde arte sacro hasta innovaciones científicas de alumnos destacados."
    },
    {
      titulo: "Colecciones",
      icono: "collections",
      contenido: "Explora nuestras salas: Arqueología regional, Historia de la educación en Nuevo León, y Galería de rectores ilustres."
    },
    {
      titulo: "Visitas Guiadas",
      icono: "groups",
      contenido: "Programa recorridos educativos para escuelas. Incluye taller interactivo 'Descubre tu patrimonio'."
    }
  ];

  // Eventos próximos
  eventos = [
    {
      fecha: "15 Oct 2023",
      titulo: "Exposición: 'Raíces de Montemorelos'",
      descripcion: "Fotografías históricas de 1900-1950."
    },
    {
      fecha: "28 Oct 2023",
      titulo: "Conferencia: 'Arte sacro del noreste'",
      descripcion: "Por el Dr. Juan Martínez, curador invitado."
    }
  ];
}
