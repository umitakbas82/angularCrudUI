import { Component, inject } from '@angular/core';
import { EmployeeModelDTO } from '../models/employeeModelDTO';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  employeeList:any
  
  ngOnInit(){
this.getDataList();
  }

  constructor(public services:DataService){}
  
  getDataList(){
    this.services.getAllData().subscribe(resp=>{      
      this.employeeList=resp
      console.log(this.employeeList)
    })
  }


}
