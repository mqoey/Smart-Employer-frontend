import { Component } from '@angular/core';

import { DesignationService } from './services/designation/designation.service';
import { DepartmentService } from './services/department/department.service';
import { AttendanceService } from './services/attendance/attendance.service';
import { EmployeeService } from './services/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart-Employer';
}

