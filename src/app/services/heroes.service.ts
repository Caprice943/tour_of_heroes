import { Injectable } from '@angular/core';
import { Heroes } from '../model/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes : Heroes[] ; 
  podium : Heroes [];
  constructor() { 
    this.heroes = [
      {idHeroes:1, nomHeroes : "Midoria"},
      {idHeroes:2 , nomHeroes : "Hulk"}, 
      {idHeroes:3 , nomHeroes : "Spiderman"},
      {idHeroes: 4, nomHeroes : "L'Archer"},
      {idHeroes: 5, nomHeroes : "Black Panther"},
      {idHeroes: 6, nomHeroes : "Batman"},
      {idHeroes: 7, nomHeroes: "Iron Man"},
      {idHeroes: 8, nomHeroes: "Capitain America"}
    ];
    this.podium = [
      {idHeroes:3 , nomHeroes : "Spiderman"},
      {idHeroes: 4, nomHeroes : "L'Archer"},
      {idHeroes: 5, nomHeroes : "Black Panther"},
      {idHeroes:1, nomHeroes : "Midoria"},
      {idHeroes:2 , nomHeroes : "Hulk"}
    ]
  }

  listHeroes() : Heroes[] {
    return this.heroes;
  }

  classementHeroes() : Heroes [] {
    return this.podium;
  }

  


}
