import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private log:UserServiceService){}

  public user ={
    username:'',
    password:'',
   
  }
  onlogin(){
    
      return this.log.userpost(this.user).subscribe(
        (res)=>{
          console.log("success",res);
        }
         // localStorage.setItem("userdata",JSON.stringify(this.user));
      )
     
     
  
    
  

  }
}
