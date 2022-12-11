import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../model/heroes.model';
import { HeroesService } from '../services/heroes.service';


@Component({
  selector: 'app-details-heroes',
  templateUrl: './details-heroes.component.html',
  styleUrls: ['./details-heroes.component.css']
})
export class DetailsHeroesComponent implements OnInit {

  currentHeroes = new Heroes();
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private heroeService : HeroesService) {}

  ngOnInit(): void {
   //console.log(this.activatedRoute.snapshot.params['id']);
   this.currentHeroes = this.heroeService.consulterHeroe(this.activatedRoute.snapshot.params['id']);
   console.log(this.currentHeroes);
  }

  updateHeroes(){
    this.heroeService.updateNameHeroe(this.currentHeroes);
    this.router.navigate(['/classementHeroes']);
  }

}

