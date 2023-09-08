import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "./auth-service.service";

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if(authService.isLoggedIn()){
    return true;
  }
  if(!authService.isLoggedIn()){
    router.navigateByUrl("");
  }
  return authService.isLoggedIn();
};
