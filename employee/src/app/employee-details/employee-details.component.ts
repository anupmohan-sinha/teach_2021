import { Employee } from './../employee-list/employee-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee; 
  constructor() { }

  ngOnInit(): void {
    console.log('details here ',this.employee);
  }

}
