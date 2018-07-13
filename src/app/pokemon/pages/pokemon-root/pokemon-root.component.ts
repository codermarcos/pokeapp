import { Component, OnInit } from '@angular/core';
import { IPokemonCard } from '../../../shared/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  trigger,
  group,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-pokemon-root',
  templateUrl: './pokemon-root.component.html',
  styleUrls: ['./pokemon-root.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
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

  public pokemons: Observable<Array<IPokemonCard>>;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAll();
  }

  search(id: string) {
    this.router.navigate(['/search', id]);
  }

}
