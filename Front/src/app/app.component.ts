import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  constructor(public service:LoginService ,private route:Router){}
  logout(){
    this.service.logout();
    this.route.navigate(['Log_in'])

  }
}
