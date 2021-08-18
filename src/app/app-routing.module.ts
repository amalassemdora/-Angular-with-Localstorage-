import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './Components/search-employee/search-employee.component';

const routes: Routes = [
  {path:"", redirectTo:"add-employee", pathMatch:"full"},
  {path:"add-employee", component:AddEmployeeComponent},
  {path:"search-employee", component:SearchEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
