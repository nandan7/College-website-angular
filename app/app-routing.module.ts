import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutklComponent } from './aboutkl/aboutkl.component';
import { ClgComponent } from './clg/clg.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RegistrationComponent } from './registration/registration.component';
import { KluComponent } from './klu/klu.component';

const routes: Routes = [
  { path: 'klu', component: KluComponent },
  { path: 'aboutkl', component: AboutklComponent },
  { path: 'clg', component: ClgComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
