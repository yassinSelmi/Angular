import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residence/residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencedetailsComponent } from './residencedetails/residencedetails.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'residence', component:ResidenceComponent},
  {path: 'details/:id',component:ResidencedetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
