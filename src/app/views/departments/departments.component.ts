import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private departmentService: DepartmentService) {
    this.result$ = departmentService.resolveDepartments();


  }

  ngOnInit(): void {
  }

}
