import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'home/:tabindex',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'add',canActivate:[AuthGuard] ,component:AddComponent},
  {path:'employee',canActivate:[AuthGuard] ,component:EmployeeComponent},
  {path:'details/:id',canActivate:[AuthGuard] ,component:UpdateComponent},
  {path:'login',component:LoginComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
