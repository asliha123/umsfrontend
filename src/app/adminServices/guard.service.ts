import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }
// method to control route
  isLoggedIn(){
    return !!localStorage.getItem("UserName")
  }
  


}
