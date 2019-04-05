import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeRaw } from './data/employeeRaw';
import { EmployeeService } from './data/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from './data/position.service';
import { Position } from './data/position';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  // Fields
  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private empService: EmployeeService, private actRoute: ActivatedRoute, private posService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.actRoute.params.subscribe((params) => {

      // Populate "employee" property
      this.employeeSubscription = this.empService.getEmployee(params['_id']).subscribe((emp) => {
        this.employee = emp[0];
      });

      // Populate "positions" property
      this.getPositionsSubcription = this.posService.getPositions().subscribe((pos) => {
        this.positions = pos;
      });
    });
  }

  onSubmit(f: NgForm) {
    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(() => {
      // First callback (success)
      this.successMessage = true;

      setTimeout(() => { this.successMessage = false; }, 2500);
    },
      () => {
        // Second callback (failure)
        this.failMessage = true;

        setTimeout(() => { this.failMessage = false; }, 2500);
      });
  }

  ngOnDestroy() {
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionsSubcription) { this.getPositionsSubcription.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }
}