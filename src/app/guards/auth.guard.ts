import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardService } from '../adminServices/guard.service';
import { ToastService } from '../adminServices/toast.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  
  const authStatus=inject(GuardService)
  const routes=inject(Router)
  const toast=inject(ToastService)

  if(authStatus.isLoggedIn()){
    return true
  }

  else{
    toast.showWarning('Please login')
    routes.navigateByUrl("")
    return false
  }
};




