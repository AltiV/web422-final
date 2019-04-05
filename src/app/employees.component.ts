import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from './data/employee';
import { EmployeeService } from './data/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;
  filteredEmployees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees.sort(((a, b) => { return a.FirstName.localeCompare(b.FirstName); }));
      this.filteredEmployees = this.employees;
    }, () => {
      this.loadingError = true;
    })
  }

  onEmployeeSearchKeyUP(event: any) {
    this.filteredEmployees = this.employees.filter(data => {
      return data.FirstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        data.LastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        data.Position.PositionName.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  ngOnDestroy() {
    this.getEmployeesSub.unsubscribe();
  }
}
