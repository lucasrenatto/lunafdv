import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EventosComponent } from './pages/eventos/eventos.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
