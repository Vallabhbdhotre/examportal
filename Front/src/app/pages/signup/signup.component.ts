
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
  constructor(private sign:UserServiceService, private router: Router,private snack1:MatSnackBar) { }
  public user = {
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: ''
  }
  emailPattern :any | RegExp = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  onSubmit() {
    if(this.user.username.trim() =="" || this.user.username.trim() == null )
    {
      this.snack1.open('All fields are required ! ' ,'',{duration:1500,verticalPosition:'top'})
    }
    return this.sign.userpost(this.user).subscribe(
      (res)=>{
        console.log("success",res)
        this.snack1.open('Registerd Succesfully','',{duration:2000,verticalPosition:'top'})
        this.router.navigate(['/Log_in']);

      }
    )
   
    // localStorage.setItem("userdata",JSON.stringify(this.user));

  }


}
