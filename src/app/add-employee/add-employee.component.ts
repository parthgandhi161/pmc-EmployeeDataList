import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  id: any;
  email: any;
  employeename: any;
  contact: any;
  department: any;
  updatedata: any;
  finalid: any;

  inputfields: any = {
    ename: '',
    con: '',
    mail: '',
    dep: '',
  };

  inidata: any;
  initial: any;
  result: any;
  index: any;

  employees: any = [];
  firstdata: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.id = params.id;
      } else {
        this.id = 0;
      }
    });
    if (this.id != 0) {
      this.inidata = localStorage.getItem('data');
      if (this.inidata == null) {
        this.initial = [];
      } else {
        this.initial = JSON.parse(this.inidata);
        this.result = this.initial.find((obj: any) => {
          return obj.id == this.id;
        });
      }

      if (this.result == undefined) {
        alert('Employee Not Found');
        this._router.navigate(['/employee-list']);
      } else {
        this.employeename = this.result.EmployeeName;
        this.contact = this.result.ContactNo;
        this.email = this.result.Email;
        this.department = this.result.Department;
      }
    }
  }

  onSubmit(form: NgForm) {
    this.firstdata = localStorage.getItem('data');
    if (this.firstdata == null) {
      this.employees = [];
    } else {
      this.employees = JSON.parse(this.firstdata);
    }

    if (this.id == 0) {
      if (this.employees[this.employees.length - 1] == undefined) {
        this.finalid = 1;
      } else {
        this.finalid = this.employees[this.employees.length - 1].id + 1;
      }
      console.log(this.finalid);
      this.updatedata = {
        id: this.finalid,
        EmployeeName: form.value.EmployeeName,
        Email: form.value.Email,
        ContactNo: form.value.ContactNo,
        Department: form.value.Department,
      };

      this.employees.push(this.updatedata);
      localStorage.setItem('data', JSON.stringify(this.employees));
      alert('Success');
      this._router.navigate(['/employee-list']);
    } else {
      this.index = this.employees.findIndex((obj: any) => obj.id == this.id);
      this.employees.splice(this.index, 1);
      console.log(this.employees);
      this.updatedata = {
        id: this.id,
        EmployeeName: form.value.EmployeeName,
        Email: form.value.Email,
        ContactNo: form.value.ContactNo,
        Department: form.value.Department,
      };
      console.log(this.updatedata);
      this.employees.splice(this.index, 0, this.updatedata);
      localStorage.setItem('data', JSON.stringify(this.employees));
      alert('updated');
      this._router.navigate(['/employee-list']);
    }
  }

  reset(form: NgForm) {
    form.reset();
  }
}
