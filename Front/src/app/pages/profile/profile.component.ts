import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

import { Userdata } from 'src/app/userdata';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  constructor(public service:LoginService ,private route :ActivatedRoute){}
  userName :string |any
  user :Userdata | any
   ngOnInit(): void {
   let userdata = this.route.snapshot.params['userName']
   console.log('this is userdata',userdata)
   console.log('this is username',this.userName);
   
      this.user=new Userdata();

      // this.service.getbyName(this.userName).subscribe(
      //  (data)=>{
      //     this.user=data
      //   }
      // )
  }


}
