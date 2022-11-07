import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementHeroesComponent } from './classement-heroes/classement-heroes.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

const routes: Routes = [{path:'listHeroes', component : ListHeroesComponent}, {path: 'classementHeroes', component : ClassementHeroesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
