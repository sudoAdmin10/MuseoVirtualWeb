import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MuseoService } from 'src/app/core/services/museo.service';
import { Item } from 'src/app/models/items.model';


@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.scss']
})
export class CrearEditarComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: MuseoService) { }

  images: Item[] = [];
  selectedImage: Item | null = null;

  editForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.service.obtenerItems().subscribe({
      next: (res) => this.images = res,
      error: (err) => console.error('Error al cargar imágenes', err)
    });
  }

  selectImage(image: Item, index: number): void {
    this.selectedImage = { ...image };
    this.editForm.patchValue({
      title: image.title,
      description: image.description
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.selectedImage) {
          this.selectedImage.url = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  saveChanges(): void {
    if (!this.selectedImage || this.editForm.invalid) return;

    const data = {
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      url: this.selectedImage.url
    };

    this.service.editarItems(this.selectedImage.item_id, data).subscribe({
      next: () => {
        const index = this.images.findIndex(img => img.item_id === this.selectedImage!.item_id);
        if (index !== -1) {
          this.images[index] = { item_id: this.selectedImage!.item_id, ...data };
        }
        alert('Cambios guardados exitosamente');
        this.cancelEdit();
      },
      error: (err) => {
        console.error('Error al guardar cambios', err);
        alert('Error al guardar los cambios');
      }
    });
  }

  cancelEdit(): void {
    this.selectedImage = null;
    this.editForm.reset();
  }

  deleteImage(index: number, event: Event): void {
    event.stopPropagation();
    const image = this.images[index];
    if (confirm('¿Estás seguro de eliminar esta imagen?')) {
      this.service.deleteItems(image.item_id).subscribe({
        next: () => {
          this.images.splice(index, 1);
          this.cancelEdit();
          alert('Imagen eliminada');
        },
        error: (err) => {
          console.error('Error al eliminar la imagen', err);
          alert('Error al eliminar la imagen');
        }
      });
    }
  }
}
