import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residence/residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencedetailsComponent } from './residencedetails/residencedetails.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { AddApartmentsComponent } from './add-apartments/add-apartments.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'residence', component:ResidenceComponent},
  {path: 'details/:id',component:ResidencedetailsComponent},
  {path:'home', component:HomeComponent},
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'update-residence/:id', component: UpdateResidenceComponent },
  {path:'addAppart',component:AddApartmentsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
