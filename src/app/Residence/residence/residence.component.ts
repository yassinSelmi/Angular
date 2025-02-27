// import { Component } from '@angular/core';
// import { Residence } from 'src/core/models/Residence';

// @Component({
//   selector: 'app-residence',
//   templateUrl: './residence.component.html',
//   styleUrls: ['./residence.component.css']
// })
// export class ResidenceComponent {
//   listResidences:Residence[]=[
//     {id:1,"name": "El fel","address":"Borj Cedria",
//     "image":"../../assets/images/R1.jpg", status: "Disponible"},
//     {id:2,"name": "El yasmine",
//     "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
//     "Disponible" },
//     {id:3,"name": "El Arij",
//     "address":"Rades","image":"../../assets/images/R3.jpg", status:
//     "Vendu"},
//     {id:4,"name": "El Anber","address":"inconnu",
//     "image":"../../assets/images/R4.jpg", status: "En Construction"}
//     ];

    
//   }



/*
import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];
  searchTerm: string = '';

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    if (index === -1) {
      this.favorites.push(residence);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }

  filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
*/
/*
import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible", likeCount: 0 },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", likeCount: 0 },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", likeCount: 0 },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction", likeCount: 0 }
  ];

  favorites: Residence[] = [];
  searchTerm: string = '';

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    
    if (index === -1) {
      // Not liked, add to favorites and increment the like count
      this.favorites.push(residence);
      residence.likeCount = (residence.likeCount || 0) + 1; // Increment like count
    } else {
      // Already liked, remove from favorites and decrement the like count
      this.favorites.splice(index, 1);
      residence.likeCount = (residence.likeCount || 0) - 1; // Decrement like count
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }

  filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}*/

/*
import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    if (index === -1) {
      this.favorites.push(residence);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }
}*/
/*
import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];
  searchTerm: string = ''; // Search term for filtering addresses

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    if (index === -1) {
      this.favorites.push(residence);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }

  // Filtered residences based on search term
  filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}*/
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Assurez-vous d'importer Router
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/app/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [];
  favorites: Residence[] = [];
  searchTerm: string = '';
  newResidence: Residence = { id: 0, name: '', address: '', image: '', status: '' }; // Pour la création de nouvelles résidences
  isEditing: boolean = false; // Pour savoir si nous sommes en mode édition
  editingResidenceId: number | null = null; // ID de la résidence en mode édition

  constructor(private residenceService: ResidenceService, private router: Router) { // Ajoutez Router ici
    this.listResidences = this.residenceService.getResidences(); // Obtenez les résidences du service
  }

  toggleFavorite(residence: Residence) {
    const index = this.favorites.findIndex(fav => fav.id === residence.id);
    if (index === -1) {
      this.favorites.push(residence);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }

  filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addResidence() {
    if (this.isEditing && this.editingResidenceId !== null) {
      this.residenceService.updateResidence({ ...this.newResidence, id: this.editingResidenceId });
      this.isEditing = false;
      this.editingResidenceId = null;
    } else {
      const newId = this.listResidences.length > 0 ? Math.max(...this.listResidences.map(r => r.id)) + 1 : 1;
      this.residenceService.addResidence({ ...this.newResidence, id: newId });
    }
    this.resetForm();
  }

  editResidence(residence: Residence) {
    this.newResidence = { ...residence }; // Copiez les données de la résidence à éditer
    this.isEditing = true;
    this.editingResidenceId = residence.id; // Mettez à jour l'ID de la résidence en cours d'édition

    // Redirige vers le formulaire de mise à jour
    this.router.navigate(['/update-residence', residence.id]); // Ajoutez cela pour rediriger
  }

  deleteResidence(id: number) {
    this.residenceService.deleteResidence(id); // Appelle le service pour supprimer
    this.listResidences = this.residenceService.getResidences(); // Mettez à jour la liste après suppression
}

  private resetForm() {
    this.newResidence = { id: 0, name: '', address: '', image: '', status: '' };
    this.isEditing = false; // Remettez également isEditing à false
    this.editingResidenceId = null; // Réinitialisez l'ID de la résidence en cours d'édition
  }
}