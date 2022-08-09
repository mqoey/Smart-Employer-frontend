import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DesignationService } from './services/designation/designation.service';
import { DepartmentService } from './services/department/department.service';
import { AttendanceService } from './services/attendance/attendance.service';
import { EmployeeService } from './services/employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
