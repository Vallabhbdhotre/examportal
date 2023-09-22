import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Set1Component } from './pages/menu/tests/set1/set1.component';
import { Set2Component } from './pages/menu/tests/set2/set2.component';
import { Set3Component } from './pages/menu/tests/set3/set3.component';
import { Set4Component } from './pages/menu/tests/set4/set4.component';
import { Set5Component } from './pages/menu/tests/set5/set5.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ResultsComponent } from './pages/results/results.component';
import { CompletedTestsComponent } from './pages/completed-tests/completed-tests.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Sign_Up', component: SignupComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Log_in', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate:[authGuardGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'set1', component: Set1Component, canActivate: [authGuardGuard] },
  { path: 'set2', component: Set2Component, canActivate: [authGuardGuard] },
  { path: 'set3', component: Set3Component, canActivate: [authGuardGuard] },
  { path: 'set4', component: Set4Component, canActivate: [authGuardGuard] },
  { path: 'set5', component: Set5Component, canActivate: [authGuardGuard] },
  { path: 'mytests', component: CompletedTestsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
