import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login.guard';
import { EnsureloginGuard } from './ensurelogin.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, EnsureloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
