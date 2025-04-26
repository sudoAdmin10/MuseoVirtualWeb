import { Component } from '@angular/core';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.scss']
})
export class MuseosComponent {
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
