import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './url';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  userpost(user:any){
     return this.http.post(`${baseurl}` ,user)
  }
}
