import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { guardGuard } from './admin-guard/guard.guard';
import { dashboardGuard } from './admin-guard/dashboard.guard';
import { PendinglistComponent } from './pages/pendinglist/pendinglist.component';
import { ActivelistComponent } from './pages/activelist/activelist.component';
import { RejectlistComponent } from './pages/rejectlist/rejectlist.component';
import { InactivelistComponent } from './pages/inactivelist/inactivelist.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [guardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [dashboardGuard]},
  { path: 'pending-list', component: PendinglistComponent, canActivate: [dashboardGuard]},
  { path: 'active-list', component: ActivelistComponent, canActivate: [dashboardGuard]},
  { path: 'reject-list', component: RejectlistComponent, canActivate: [dashboardGuard]},
  { path: 'inactive-list', component: InactivelistComponent, canActivate: [dashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
