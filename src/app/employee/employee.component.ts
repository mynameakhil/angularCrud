import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emp:EmployeeServiceService, private router:Router, private toastr:ToastrService) { }
  empArr:any=[]
  empId:any
  ngOnInit(): any {
    this.emp.getEmployee().subscribe((res)=>{
      this.empArr=res
      console.log(this.empArr)
    })
  }

  navigate(){
    this.router.navigate(['/create'])
  }

  onEdit(id:any){
    this.router.navigate([`/create/${id}`])

  }
  onDelete(id:any){
    if(confirm("are you sure ? want to delete it"))
    this.emp.deleteEmployee(id).subscribe((res)=>{
      console.log(res)
      this.toastr.success("dleted successfully","successs")
      this.ngOnInit()
    })
    
  }

}
