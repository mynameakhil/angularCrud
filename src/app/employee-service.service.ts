import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  getEmployee(){
    return this.http.get<any>('http://localhost:3000/employee')
  }
  postEmployee(data:any){
    console.log(">>>>///",data)
    return this.http.post<any>('http://localhost:3000/employee',data)
  }
  getEmployeeId(id:any){
    console.log(">>>>///",id)
    return this.http.get<any>(`http://localhost:3000/employee/${id}`,)
  }
  editEmployee(id:any,data:any){
    console.log(">>>>///",id)
    return this.http.put<any>(`http://localhost:3000/employee/${id}`,data)
  }

  deleteEmployee(id:any){
    console.log(">>>>///",id)
    return this.http.delete<any>(`http://localhost:3000/employee/${id}`)
  }
}
