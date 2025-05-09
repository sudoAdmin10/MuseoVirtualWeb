import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Image {
  id: number;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.scss']
})
export class CrearEditarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  images: Image[] = [
    { id: 1, title: 'Obra 1', description: 'Descripción de la obra 1', url: 'assets/img/m2.jpg' },
    { id: 2, title: 'Obra 2', description: 'Descripción de la obra 2', url: 'assets/img/m3.jpg ' },
    { id: 1, title: 'Obra 3', description: 'Descripción de la obra 3', url: 'assets/img/m4.jpg' },
    { id: 2, title: 'Obra 4', description: 'Descripción de la obra 4', url: 'assets/img/m5.jpg ' },
  ];

  selectedImage: Image | null = null;
  editForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  selectImage(image: Image, index: number): void {
    this.selectedImage = { ...image };
    this.editForm.patchValue({
      title: image.title,
      description: image.description,
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage!.url = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveChanges(): void {
    if (this.selectedImage && this.editForm.valid) {
      const updatedData = this.editForm.value;
      this.selectedImage.title = updatedData.title;
      this.selectedImage.description = updatedData.description;

      // Actualizar la lista de imágenes
      const index = this.images.findIndex((img) => img.id === this.selectedImage!.id);
      if (index !== -1) {
        this.images[index] = { ...this.selectedImage };
      }

      alert('Cambios guardados exitosamente');
    }
  }

  cancelEdit(): void {
    this.selectedImage = null;
    this.editForm.reset();
  }

  deleteImage(index: number, event: Event): void {
    event.stopPropagation();
    if (confirm('¿Estás seguro de eliminar esta imagen?')) {
      this.images.splice(index, 1);
      this.selectedImage = null;
      this.editForm.reset();
    }
  }
}
