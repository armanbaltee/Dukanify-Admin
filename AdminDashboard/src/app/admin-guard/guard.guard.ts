import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService)
  
  if(authService.isLoggedIn()){
    return router.navigate(['/dashboard'])
  }else{
    return true;
  }
};
