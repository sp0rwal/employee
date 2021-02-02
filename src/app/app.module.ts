import { BrowserModule, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTabLabel, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    EmployeeComponent,
    UpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  MatInputModule,
  MatButtonModule,
    MatTabsModule,
   MatToolbarModule,
   MatIconModule,
      FormsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
 
