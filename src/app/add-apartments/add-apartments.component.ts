import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Modèle de données pour un appartement
interface Apartment {
  apartNum: string;
  floorNum: number;
  surface: number;
  terrace: string;
  surfaceTerrace?: number;
  category: string;
  residenceId?: string;
}

@Component({
  selector: 'app-add-apartments',
  templateUrl: './add-apartments.component.html',
  styleUrls: ['./add-apartments.component.css']
})
export class AddApartmentsComponent {

  // Propriété pour stocker l'appartement saisi
  newApart: Apartment | null = null;

  // Formulaire de saisie
  AddApart = new FormGroup({
    apartNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    floorNum: new FormControl('', [Validators.required, Validators.min(2), Validators.pattern("^[0-9]*$")]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl('yes', Validators.required),
    surfaceTerrace: new FormControl({ value: '', disabled: true }, Validators.required),
    category: new FormControl('', Validators.required),
    residenceId: new FormControl(''),
  });

  // Activer/Désactiver le champ Surface Terrace en fonction du choix "Terrace"
  onTerraceChange() {
    if (this.AddApart.get('terrace')?.value === 'no') {
      this.AddApart.get('surfaceTerrace')?.reset();
      this.AddApart.get('surfaceTerrace')?.disable();
    } else {
      this.AddApart.get('surfaceTerrace')?.enable();
    }
  }

  // Récupération des données saisies
  onSubmit() {
    if (this.AddApart.valid) {
      this.newApart = {
        apartNum: this.AddApart.value.apartNum!,
        floorNum: Number(this.AddApart.value.floorNum),
        surface: Number(this.AddApart.value.surface),
        terrace: this.AddApart.value.terrace!,
        surfaceTerrace: this.AddApart.value.terrace === 'yes' ? Number(this.AddApart.value.surfaceTerrace) : undefined,
        category: this.AddApart.value.category!,
        residenceId: this.AddApart.value.residenceId!,
      };

      // Affichage des données dans la console
      console.log("Nouvel appartement ajouté :", this.newApart);
    }
  }
}