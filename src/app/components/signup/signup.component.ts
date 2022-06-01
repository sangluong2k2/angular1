import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: Iuser = {
    name: "",
    email: "",
    password: ""
  }
  constructor(private userservice : LoginService,
    private routes: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.creatUser(this.user).subscribe( data =>{
      this.routes.navigate(['signin'])
    })
    console.log(this.user)
  }
}