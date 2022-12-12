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

  consulterHeroe(id: number): Heroes {
    return this.heroes.find((h) => h.idHeroes == id)!;
  }

  supprimerHeroe(her: Heroes) {
    const index = this.heroes.indexOf(her, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
  }

  ajouterHeroe(h : Heroes){
    return this.heroes.push(h);

  }

  updateNameHeroe(h:Heroes){
    this.supprimerHeroe(h);
    this.ajouterHeroe(h);
   
  }

  


}
