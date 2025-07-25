import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { guardGuard } from './admin-guard/guard.guard';
import { dashboardGuard } from './admin-guard/dashboard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [guardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [dashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
