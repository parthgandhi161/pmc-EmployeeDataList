import { Injectable } from '@angular/core';
import empdataapi from 'src/api/data.json';

@Injectable()
export class Employeeservice {
  getEmployees(): any {
    return empdataapi;
  }

  getEmployee(id: number): any {
    return empdataapi.filter((employeedata, index) => {
      return employeedata.employeeid == id;
    });
  }
}
