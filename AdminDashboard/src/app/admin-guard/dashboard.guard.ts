import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService)
  
  if(authService.isLoggedIn()){
    return true
  }else{
    return router.navigate(['/']);
  }
};
