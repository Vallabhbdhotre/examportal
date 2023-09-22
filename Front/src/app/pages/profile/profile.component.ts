import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  constructor(public service:LoginService ,private route :ActivatedRoute){}
   localData:any=localStorage.getItem('userData')
   userdata:any
   
   
   ngOnInit(): void {
  
  if(this.localData != null) {
    this.userdata= JSON.parse(this.localData) ;
    // console.log('this is data',this.userdata)
  }
  
  }


}
