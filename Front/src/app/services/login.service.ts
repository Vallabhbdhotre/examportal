import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './url';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    this.http.get(`${baseurl}/current-user`)
  }
  
  //posting data to server
  public generatetoken(logindata:any){

    return this.http.post(`${baseurl}/generate-token`,logindata);
  }


  //set token in localstorage
  public loginuser(token: any){
    localStorage.setItem("token",token)
    return true;
    
  }


  //islogin : tocheck logged in or not
  public islogin(){
    let tokenstr=localStorage.getItem("token")
    if(tokenstr==undefined || tokenstr==null || tokenstr=="")
    {
      return false;
    }else{
      return true;
    }
  }


  public logout(){
    localStorage.removeItem("token")
    localStorage.removeItem('user')
    return true;
  }

  
  //to get token
  public gettoken(){
    localStorage.getItem("token")
  }


  //to set userdata
  public setuser(user:any){
    localStorage.setItem('user' ,JSON.stringify(user))
  }



  //to get userdata
  public getuserdata(){
    let userstr:any=localStorage.getItem('user')
    if(userstr!=null){
      return JSON.parse(userstr)
    }
    else{
      this.logout();
      return null;
    }
      
  }


  }

