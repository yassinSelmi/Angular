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
}