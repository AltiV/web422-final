import { Injectable } from '@angular/core';

import { Position } from "./position";

@Injectable({
    providedIn: 'root'
})
export class Employee {

    // Fields
    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position: Position;
    HireDate: string;
    SalaryBonus: number;
    __v: number;

    constructor() { }

    // Functions
}