import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeservice } from './employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];
  deledata: any = [];
  deletedata: any;
  firstdata: any;

  constructor(
    private _route: ActivatedRoute,
    private _employees: Employeeservice
  ) {}

  ngOnInit(): void {
    // localStorage.setItem(
    //   'data',
    //   JSON.stringify(this._employees.getEmployees())
    // );
    this.firstdata = localStorage.getItem('data');
    if (this.firstdata == null) {
      this.employees = [];
    } else {
      this.employees = JSON.parse(this.firstdata);
    }
  }

  delete(id: number): void {
    this.deletedata = localStorage.getItem('data');
    if (this.deletedata == null) {
      this.deledata = [];
    } else {
      this.deledata = JSON.parse(this.deletedata);
    }
    this.deledata.forEach((val: any, index: any) => {
      if (val.id == id) {
        this.deledata.splice(index, 1);
      }
    });
    localStorage.setItem('data', JSON.stringify(this.deledata));
    this.ngOnInit();
  }
}
