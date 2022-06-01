import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3001/'
  constructor(private http : HttpClient) { }
    creatUser(users: Iuser ){
      return this.http.post(`${this.url}users`,users)
   }
   signin(user:Iuser){
     return this.http.post(`${this.url}login`,user)
   }
}