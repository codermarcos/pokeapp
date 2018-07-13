import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  group,
  style,
  animate,
  transition
} from '@angular/animations';

import { IPokemonCard } from 'src/app/shared/models/pokemon';
import { PokemonService } from 'src/app/pokemon/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-root',
  templateUrl: './pokemon-root.component.html',
  styleUrls: ['./pokemon-root.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class PokemonRootComponent implements OnInit {

  public pokemons: Array<IPokemonCard> = [];
  public currentPage = 1;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPage(this.currentPage);
  }

  search(id: string) {
    this.router.navigate(['/search', id]);
  }

  getPage(page: number) {
    this.pokemonService
      .getAll(`${page * 20}`, `${page * 20}`)
      .subscribe(
        data => {
          this.pokemons = [];
          data.forEach(
            (item, i) => setTimeout(() => this.pokemons.push(item), 100 * i)
          );
        }
      );
  }

  next() {
    this.currentPage++;
    this.getPage(this.currentPage);
  }

  prev() {
    this.currentPage--;
    this.getPage(this.currentPage);
  }
}
