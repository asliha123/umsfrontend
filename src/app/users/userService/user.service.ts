import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:8000'

  constructor(private http:HttpClient) { }

  // addUserApi
  addUser(bodyData:any){
  return  this.http.post(`${this.baseUrl}/users`,bodyData)
  }
  // get all user
  getUser(){
    return this.http.get(`${this.baseUrl}/users`)
  }
  // delete user
  deleteUser(id:any){
             return   this.http.delete(`${this.baseUrl}/users/${id}`)
  }
  // access single user
  getUserData(uid:any){
    return this.http.get(`${this.baseUrl}/users/${uid}`)
  }
  // update user data
  updateUser(id:any,bodyData:any){
   return this.http.put(`${this.baseUrl}/users/${id}`,bodyData)
  }
}
