
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  [x: string]: any;
  constructor(private sign:UserServiceService, private router: Router) { }
  public user = {
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: ''
  }
  
  onSubmit() {
    return this.sign.userpost(this.user).subscribe(
      (res)=>{
        console.log("success",res)
        this.router.navigate(['/Log_in']);

      }
    )
   
    // localStorage.setItem("userdata",JSON.stringify(this.user));

  }


}
