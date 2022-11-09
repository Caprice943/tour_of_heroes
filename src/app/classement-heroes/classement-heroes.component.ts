import { Component, OnInit } from '@angular/core';
import { Heroes } from '../model/heroes.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-classement-heroes',
  templateUrl: './classement-heroes.component.html',
  styleUrls: ['./classement-heroes.component.css']
})
export class ClassementHeroesComponent implements OnInit {
  
  podium : Heroes[] | undefined ;
  heroeService = new HeroesService;
  constructor() { }

  ngOnInit(): void {
     this.podium = this.heroeService.classementHeroes();
  }

}
