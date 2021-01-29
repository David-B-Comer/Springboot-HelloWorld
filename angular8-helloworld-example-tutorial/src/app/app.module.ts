import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldService } from './service/hello-world.service';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';

@NgModule({
declarations: [
AppComponent,
MenuComponent,
HelloWorldComponent,
LoginComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
],
providers: [
HelloWorldService,
],
bootstrap: [AppComponent]
})
export class AppModule { }
