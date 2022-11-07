import { Injectable } from '@angular/core';
import { Heroes } from '../model/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes : Heroes[] ;
  constructor() { 
    this.heroes = [
      {idHeroes:1, nomHeroes : "Midoria"},
      {idHeroes:2 , nomHeroes : "Deku"},
      {idHeroes:3 , nomHeroes : "Gon"},
      {idHeroes: 4, nomHeroes : "Ichigo"},
      {idHeroes: 5, nomHeroes : "Tatsuki"},
      {idHeroes: 6, nomHeroes : "Chad"},
      {idHeroes: 7, nomHeroes: "Renji"},
      {idHeroes: 8, nomHeroes: "Rukia"}
    ]
  }

  listHeroes() : Heroes[] {
    return this.heroes;
  }
}
