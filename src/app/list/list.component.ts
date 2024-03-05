import { Component } from '@angular/core';
import { EmployeeModelDTO } from '../models/employeeModelDTO';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  employeeList:EmployeeModelDTO[]=[]

  ngOnInit(){
    
  }
  

}
