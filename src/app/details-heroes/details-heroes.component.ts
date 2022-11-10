import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-details-heroes',
  templateUrl: './details-heroes.component.html',
  styleUrls: ['./details-heroes.component.css']
})
export class DetailsHeroesComponent implements OnInit {

  nomHeroes : string  ;
  constructor() { this.nomHeroes = "vbfdsgbikut"}

  ngOnInit(): void {
   
  }

}

