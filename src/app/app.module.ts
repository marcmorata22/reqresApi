import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { UsersService } from './Service/users.service';
import { NasaService } from './Service/nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService, NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
