import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
  Name:string="";
  EmployeeName:any;
  Department:string="";
  EmployeeCode:string="";
  Birthdate:any=Date;
  Gender:string="";
  selected: boolean=false;
  Data:{name:string,dept:string,code:string,birthdate:Date,gender:string,selected:boolean}[]=[];

  Add(){
    let RegistData:{name:string,dept:string,code:string,birthdate:Date,gender:string,selected:boolean}={name:this.EmployeeName,dept:this.Department,code:this.EmployeeCode,birthdate:this.Birthdate,gender:this.Gender,selected:this.selected||false};
    this.Data.push(RegistData);
     localStorage.setItem("Employee_Data", JSON.stringify(this.Data));

  }
}
