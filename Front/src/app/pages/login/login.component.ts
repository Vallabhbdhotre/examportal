import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private login:LoginService,private snack: MatSnackBar,private router:Router) { }

  public logindata = {
    username: '',
    password: '',

  }
  onlogin() {


    if (this.logindata.username.trim() == " " || this.logindata.username == null ||
      this.logindata.password.trim() == " " || this.logindata.password == null)
       {
         this.snack.open('All fields are required !', '', { duration: 1500, verticalPosition: 'top' })
        }
        return this.login.generatetoken(this.logindata).subscribe(
          (data:any)=>{
            console.log("logged in")
            console.log(data)
            this.snack.open('You Are Logged In !', '', { duration: 1500, verticalPosition: 'top' })
            this.login.loginuser(data.token)
            this.router.navigate(['/dashboard'])
           
          });
  }

}

