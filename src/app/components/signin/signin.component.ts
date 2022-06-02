import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  users: Iuser={
    email: "",
    password:""
  }
  constructor(private userservice : LoginService,
    private routes: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.signin(this.users).subscribe(data =>{
      console.log("đang nhâp thành công")
      localStorage.setItem('user', JSON.stringify(data))
      this.routes.navigate([''])
    })
    console.log(this.users)
  }
}