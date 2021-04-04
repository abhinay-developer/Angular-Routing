import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
 username:string;
  constructor(private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

   this.username=this.activatedRoute.snapshot.paramMap.get('name');
   alert( this.username);
  }
  onRedirect(){
    this.route.navigate(['user-login']);
  }
}
