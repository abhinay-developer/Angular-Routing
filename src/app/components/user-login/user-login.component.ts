import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class User{

  username:string;
  password:string;
}



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  theUser:User=new User;
  errorMessage:string;
  constructor(private route:Router) { 
   
  }

  ngOnInit(): void {
  }
  public onUserLogin(){
    if(this.theUser.username=="abhi"&&this.theUser.password=="Abhi@123"){
      this.errorMessage="Login Success";
       this.route.navigate(['user-home',this.theUser.username]);

    }
    else{
      this.errorMessage="Invalid Username or Password";
    }
  }
}
