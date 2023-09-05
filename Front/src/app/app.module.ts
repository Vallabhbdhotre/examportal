import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './pages/menu/menu.component'
import { UserServiceService } from './services/user-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { Set1Component } from './pages/menu/tests/set1/set1.component';
import { Set2Component } from './pages/menu/tests/set2/set2.component';
import { Set3Component } from './pages/menu/tests/set3/set3.component';
import { Set4Component } from './pages/menu/tests/set4/set4.component';
import { Set5Component } from './pages/menu/tests/set5/set5.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    Set1Component,
    Set2Component,
    Set3Component,
    Set4Component,
    Set5Component,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule

  ],
  providers: [UserServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
