
import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  [x: string]: any;
  constructor(private sign:UserServiceService, private router: Router,private snack:MatSnackBar) { }
  public user = {
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: ''
  }
  
  onSubmit() {
    if(this.user.username=="" ||this.user.username== null) 
    {
      this.snack.open('All Fields are required !','',{duration:2000 ,verticalPosition:'top'})
    }
    return this.sign.userpost(this.user).subscribe(
      (res)=>{
        console.log("success",res)
        this.snack.open('Registerd Succesfully','',{duration:2000,verticalPosition:'top'})
        this.router.navigate(['/Log_in']);

      }
    )
   
    // localStorage.setItem("userdata",JSON.stringify(this.user));

  }


}