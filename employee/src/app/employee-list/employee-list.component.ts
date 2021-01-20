import { EmployeeService } from './../services/employee.service';
import { Employee } from './employee-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[];
  public empDetails: Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList  = this.employeeService.getEmployeeList();
  }

  getEmpDetails(id: Number) {
    this.empDetails = this.employeeService.getEmployeeDetails(id);
    //return this.employeeService.getEmployeeDetails(id);
  }
}
