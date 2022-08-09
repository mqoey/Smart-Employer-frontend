import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { DesignationService } from './services/designation/designation.service';
import { DepartmentService } from './services/department/department.service';
import { AttendanceService } from './services/attendance/attendance.service';
import { EmployeeService } from './services/employee/employee.service';
import { DepartmentsComponent } from './views/departments/departments.component';
import { DesignationsComponent } from './views/designations/designations.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { AttendancesComponent } from './views/attendances/attendances.component';
import { LoginComponent } from './views/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DesignationsComponent,
    EmployeesComponent,
    AttendancesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DepartmentService,
    DesignationService,
    AttendanceService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
