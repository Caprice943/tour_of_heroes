import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsHeroesComponent } from './details-heroes/details-heroes.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { ClassementHeroesComponent } from './classement-heroes/classement-heroes.component';
import { HomeHeroesComponent } from './home-heroes/home-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsHeroesComponent,
    ListHeroesComponent,
    ClassementHeroesComponent,
    HomeHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
