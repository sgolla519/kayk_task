import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService} from './admin.service';

import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
