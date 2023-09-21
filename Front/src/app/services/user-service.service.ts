import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './url';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  //posting userdata to server
  userpost(user:any){
     return this.http.post(`${baseurl}/user/` ,user)
  }
  
  
}
