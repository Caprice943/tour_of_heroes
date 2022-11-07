import { Component, OnInit } from '@angular/core';
import { Heroes } from '../model/heroes.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  Singleheroe : Heroes[] | undefined ;
  heroeService: HeroesService = new HeroesService;

 
  constructor() {}

  ngOnInit(): void {
    this.Singleheroe = this.heroeService.listHeroes();
  }

}
