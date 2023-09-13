import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export const authGuardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const auth =inject(LoginService);
  const snack= inject(MatSnackBar);
  if(auth.islogin()){
    return true;
  }
  else
  snack.open('You Need To Sign-In First !','',{duration:1500,verticalPosition:'top'})
  router.navigate(['/Log_in']);
  return false;
  
};
