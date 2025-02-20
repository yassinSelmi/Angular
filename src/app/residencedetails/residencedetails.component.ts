import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
id!:number;
 listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

constructor(private ar:ActivatedRoute){}
ngOnInit(){
//this.id=this.ar.snapshot.params['id'];
//console.log(this.id);

this.ar.params.subscribe(params=>{
this.id=params['id'];
console.log(this.id);
})







}
}