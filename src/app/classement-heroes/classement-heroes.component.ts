import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroes } from '../model/heroes.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-classement-heroes',
  templateUrl: './classement-heroes.component.html',
  styleUrls: ['./classement-heroes.component.css']
})
export class ClassementHeroesComponent implements OnInit {

onClickButton(nomHeroes : string) {
  this.clickHeroe.emit({heroe : this.heroe});
}
  
@Output() clickHeroe =new EventEmitter<{ heroe: Heroes}>();
 podium : Heroes[] | undefined ;
 heroeService = new HeroesService;
 heroe! : Heroes;
 
  constructor() { this.podium = this.heroeService.classementHeroes();}

  ngOnInit(): void {
     
  }
  

  

}



