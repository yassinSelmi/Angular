/*import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
  id!: number;
  currentIndex: number = 0;
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.id = +params['id']; // Utilisez "+" pour convertir en nombre
      this.currentIndex = this.listResidences.findIndex(res => res.id === this.id);
    });
  }

  get currentResidence(): Residence {
    return this.listResidences[this.currentIndex];
  }

  nextResidence() {
    if (this.currentIndex < this.listResidences.length - 1) {
      this.currentIndex++;
      this.id = this.listResidences[this.currentIndex].id; // Mettre à jour l'id
    } else {
      console.log('Aucune résidence suivante.');
    }
  }

  previousResidence() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.id = this.listResidences[this.currentIndex].id; // Mettre à jour l'id
    } else {
      console.log('Aucune résidence précédente.');
    }
  }
}*/
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/app/residence.service'; // Assurez-vous d'importer le service

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
  id!: number;
  currentIndex: number = 0;
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  constructor(private ar: ActivatedRoute, private router: Router, private residenceService: ResidenceService) {} // Injectez le service

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.id = +params['id']; // Utilisez "+" pour convertir en nombre
      this.currentIndex = this.listResidences.findIndex(res => res.id === this.id);
    });
  }

  get currentResidence(): Residence {
    return this.listResidences[this.currentIndex];
  }

  previousResidence() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.id = this.listResidences[this.currentIndex].id; // Mettre à jour l'id
    }
  }

  nextResidence() {
    if (this.currentIndex < this.listResidences.length - 1) {
      this.currentIndex++;
      this.id = this.listResidences[this.currentIndex].id; // Mettre à jour l'id
    }
  }

  deleteResidence() {
    this.residenceService.deleteResidence(this.currentResidence.id); // Supprimer la résidence
    this.router.navigate(['/residence']); // Rediriger après la suppression
  }

  populateAddForm() {
    // Redirige vers le composant AddResidence avec l'ID de la résidence actuelle
    this.router.navigate(['/add-residence'], { state: { residence: this.currentResidence } });
  }
}