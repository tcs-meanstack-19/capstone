import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const Jwt = new JwtHelperService()
class DecodedToken {
  exp: number;
  username: string;
  status:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    phoneno: '',
    address: '',
    status:false
  };

  private decodedToken

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient, private router:Router) { 
    console.log(this.decodedToken)
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
  }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }

  signin(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }


  //Helper Methods

  setToken(token: string) {
    //localStorage.setItem('token', token);
    //console.log(token)
    this.decodedToken = Jwt.decodeToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  getUserByName(): string {
    return this.decodedToken.username
  }

  public getUserById(): string {
    return this.decodedToken._id
  }
 

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  userLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('auth_meta');
    this.router.navigate(['signin']);
  }

}

