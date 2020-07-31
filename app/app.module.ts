import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutklComponent } from './aboutkl/aboutkl.component';
import { ClgComponent } from './clg/clg.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { KluComponent } from './klu/klu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutklComponent,
    ClgComponent,
    AdmissionsComponent,
    FacilitiesComponent,
    RegistrationComponent,
    FooterComponent,
    KluComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ' ',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
