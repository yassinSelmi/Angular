import { Injectable } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  private listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  // Méthode pour récupérer toutes les résidences
  getResidences(): Residence[] {
    return this.listResidences;
  }

  // Méthode pour ajouter une nouvelle résidence
  addResidence(residence: Residence) {
    this.listResidences.push(residence);
  }

  // Méthode pour mettre à jour une résidence existante
  updateResidence(updatedResidence: Residence) {
    const index = this.listResidences.findIndex(r => r.id === updatedResidence.id);
    if (index !== -1) {
      this.listResidences[index] = updatedResidence;
    }
  }

  // Méthode pour supprimer une résidence par son ID
  deleteResidence(id: number) {
    this.listResidences = this.listResidences.filter(r => r.id !== id);
  }
}