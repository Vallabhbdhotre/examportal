import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Userdata } from 'src/app/userdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public service:LoginService,private route:Router){}
  user = new Userdata();
  profile(userName:any){
     return this.route.navigate(['/profile',userName])
  }
  
}
