import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Employeeservice } from './employee-list/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employee', component: AddEmployeeComponent },
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'employee-list', pathMatch: 'full' },
    ]),
  ],
  providers: [Employeeservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
