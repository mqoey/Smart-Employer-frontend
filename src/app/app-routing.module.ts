import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent } from './views/departments/departments.component';
import { DesignationsComponent } from './views/designations/designations.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { AttendancesComponent } from './views/attendances/attendances.component';
import { LoginComponent } from './views/auth/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'designations',
    component: DesignationsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'attendances',
    component: AttendancesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
