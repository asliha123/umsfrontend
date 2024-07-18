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
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GuardService {
//   private loggedIn = false;

//   isLoggedIn(): boolean {
//     return this.loggedIn;
//   }

//   login() {
//     this.loggedIn = true;
//   }

//   logout() {
//     this.loggedIn = false;
//   }
// }

