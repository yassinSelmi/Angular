/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/app/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  newResidence: Residence = { id: 0, name: '', address: '', image: '', status: '' };

  constructor(private residenceService: ResidenceService, private router: Router) {}

  addResidence() {
    const newID = this.residenceService.getResidences().length > 0
      ? Math.max(...this.residenceService.getResidences().map(r => r.id)) + 1
      : 1;
      
    this.residenceService.addResidence({ ...this.newResidence, id: newID });
    
    // Redirection vers la liste des résidences
    this.router.navigate(['/residence']);
  }

  resetForm() {
    this.newResidence = { id: 0, name: '', address: '', image: '', status: '' };
  }
}*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

// Modèle pour un appartement
interface Apartment {
  apartNum: string;
  floorNum: number;
  surface: number;
  terrace: string;
  surfaceTerrace?: number;
  category: string;
}

// Modèle pour une résidence
interface Residence {
  id: string;
  name: string;
  address: string;
  image: string;
  status: string;
  apartments: Apartment[];
}

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  
  // Propriété pour stocker la nouvelle résidence
  newResidence: Residence | null = null;

  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i)]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([])
    });
  }

  // Getter pour récupérer les appartements sous forme de FormArray
  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  // Ajouter un nouvel appartement
  addApartment() {
    const apartmentForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      floorNum: ['', [Validators.required, Validators.min(2), Validators.pattern("^[0-9]*$")]],
      surface: ['', Validators.required],
      terrace: ['yes', Validators.required],
      surfaceTerrace: [{ value: '', disabled: true }, Validators.required],
      category: ['', Validators.required]
    });

    // Gérer l'activation/désactivation du champ surfaceTerrace
    apartmentForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value === 'no') {
        apartmentForm.get('surfaceTerrace')?.reset();
        apartmentForm.get('surfaceTerrace')?.disable();
      } else {
        apartmentForm.get('surfaceTerrace')?.enable();
      }
    });

    this.apartments.push(apartmentForm);
  }

  // Supprimer un appartement de la liste
  removeApartment(index: number) {
    this.apartments.removeAt(index);
  }

  // Soumettre le formulaire et récupérer les données
  onSubmit() {
    if (this.residenceForm.valid) {
      this.newResidence = this.residenceForm.value;
      console.log("Nouvelle résidence ajoutée :", this.newResidence);
    }
  }
}
