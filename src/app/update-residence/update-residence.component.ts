import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/app/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent implements OnInit {
  residenceToUpdate: Residence; // Résidence à modifier

  constructor(
    private residenceService: ResidenceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.residenceToUpdate = { id: 0, name: '', address: '', image: '', status: '' }; // Initialisation
  }

  ngOnInit(): void {
    // Récupérer l'ID de la résidence à partir des paramètres de la route
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Charger les détails de la résidence correspondante
    const foundResidence = this.residenceService.getResidences().find(res => res.id === id);
    
    if (foundResidence) {
      this.residenceToUpdate = { ...foundResidence };
    } else {
      // Gestion de l'erreur : résidence non trouvée
      console.error(`Résidence avec ID ${id} non trouvée`);
      this.router.navigate(['/residence']); // Rediriger vers la liste
    }
  }

  updateResidence() {
    this.residenceService.updateResidence(this.residenceToUpdate); // Appeler la méthode de mise à jour
    this.router.navigate(['/residence']); // Rediriger vers la liste des résidences
  }
}