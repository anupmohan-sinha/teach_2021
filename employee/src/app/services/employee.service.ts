import { Injectable } from '@angular/core';
import { Employee } from '../employee-list/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public employeeList: Employee[] = [
    {"name": "Priyanka","employeeId":101,"address": "BLR","phoneNumber": 1234567890},
    {"name": "Bharti","employeeId":102,"address": "BLR ds","phoneNumber": 2234567890},
    {"name": "Anup","employeeId":103,"address": "PATNA","phoneNumber": 9234567890},
    {"name": "Ravi","employeeId":104,"address": "Mysore","phoneNumber": 1111111111},
    {"name": "Mohan","employeeId":105,"address": "New York","phoneNumber": 7234567890},
    {"name": "Priti","employeeId":106,"address": "Bhagalpur","phoneNumber": 8234567890},
    ];

  getEmployeeList() {
    return this.employeeList;
  }

  getEmployeeDetails(id: Number) {
/*     for(let i=0; i < this.employeeList.length; i++) {
      if(this.employeeList[i].employeeId === id) {
        return this.employeeList[i];
      }
    } */
    let x: Employee; 
    this.employeeList.forEach(emp => {
      if(emp.employeeId === id) {
        x = emp;
    }});

    return x;
  }
}
