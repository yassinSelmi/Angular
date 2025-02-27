import { Injectable } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  private listResidences: Residence[] = [
    // Vos données initiales ici
  ];

  getResidences(): Residence[] {
    return this.listResidences;
  }

  addResidence(residence: Residence) {
    this.listResidences.push(residence);
  }

  updateResidence(updatedResidence: Residence) {
    const index = this.listResidences.findIndex(r => r.id === updatedResidence.id);
    if (index !== -1) {
      this.listResidences[index] = updatedResidence;
    }
  }

  deleteResidence(id: number) {
    this.listResidences = this.listResidences.filter(r => r.id !== id);
  }
}