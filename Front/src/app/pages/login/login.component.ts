import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private login: LoginService,
    private snack: MatSnackBar,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get controls() {
    return this.loginForm.controls;
  }

  // public logindata = {
  //   username: "",
  //   password: "",
  // };

  onlogin() {
    if (this.loginForm.valid) {
      this.login.generatetoken(this.loginForm.value).subscribe({
        next: (res) => {
          console.log("this is res ", res);
          this.snack.open("You Are Logged In !", "", {
            duration: 2000,
            verticalPosition: "top",
          });
          if (res) {
            localStorage.setItem("userData", JSON.stringify(res));
            this.router.navigate(["/dashboard"]);
          }
        },
        error: (error) => {
          console.log("this is error ", error);
        },
      });
    } else {
      console.log("this form is invalid");
      // this.snack.open("All fields are required !", "", {
      //   duration: 1500,
      //   verticalPosition: "top",
      // });
      this.loginForm.markAllAsTouched();
    }

    // if (
    //   this.logindata.username.trim() == "" ||
    //   this.logindata.username == null ||
    //   this.logindata.password.trim() == "" ||
    //   this.logindata.password == null
    // ) {
    //   this.snack.open("All fields are required !", "", {
    //     duration: 1500,
    //     verticalPosition: "top",
    //   });
    // }

    // return this.login.generatetoken(this.logindata).subscribe((data: any) => {
    //   console.log("logged in");
    //   // console.log(data)
    //   this.snack.open("You Are Logged In !", "", {
    //     duration: 2000,
    //     verticalPosition: "top",
    //   });
    //   this.login.loginuser(data.token);
    //   this.login.setuser(this.logindata);
    //   this.router.navigate(["/dashboard"]);
    // });
  }
}
