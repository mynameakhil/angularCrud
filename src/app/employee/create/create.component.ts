import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empPost:EmployeeServiceService, private toastr:ToastrService, private router:Router, private route:ActivatedRoute) { }
  data={
    firstName:'',
    lastName:'',
    age:null
  }
  empId:any

  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('id')
    console.log("idddd",this.empId)
    if(this.empId){
    this.empPost.getEmployeeId(this.empId).subscribe(res=>{
      console.log("ressss",res)
      this.data=res;
    })
  }
   
  }
  onSubmit(){
    if(this.empId){
      this.empPost.editEmployee(this.empId,this.data).subscribe((res)=>{
        console.log(res)
        this.toastr.success("successfully edited","successs")
        this.router.navigate(['/'])
    })
  }
    else{
    this.empPost.postEmployee(this.data).subscribe((res)=>{
      console.log(res)
      this.toastr.success("successfully registed","successs")
      this.router.navigate(['/'])
    
    })

  }}

}
