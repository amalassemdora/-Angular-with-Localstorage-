import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent  {

  searchKey:string="";
  searchdept:string="";
  selectedAll: any;
  Employees:Array<any> = JSON.parse(localStorage.getItem('Employee_Data') || '{}');
  num:number=2;

  search(){
    let filterResult: Array<any> = this.Employees.filter(u =>
      u.name == this.searchKey || u.dept == this.searchdept);
    this.Employees=filterResult;

  }
  //selection
  selectAll() {
    for (var i = 0; i < this.Employees.length; i++) {
      this.Employees[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.Employees.every(function(item:any) {
        return item.selected == true;
      })
  }
}
