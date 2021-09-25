import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InjectorDirective } from './injector.directive';

//import { GoBackAnchorComponent } from './components/go-back-anchor/go-back-anchor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InjectorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
