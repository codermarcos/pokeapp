import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  PokemonService,
  CharacteristicsService
} from 'src/app/pokemon/services';
import { IPokemon } from 'src/app/shared/models/pokemon';
import { ICharacteristic } from 'src/app/shared/models/characteristics';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: IPokemon;
  public characteristic: ICharacteristic;

  constructor(
    private characteristicService: CharacteristicsService,
    private pokemonService: PokemonService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.paramMap
      .subscribe(
        params => this.searchPokemon(params.get('id'))
      );
  }

  searchPokemon(id: string) {
    this.getPokemon(id);
    this.getCharacteristic(id);
  }

  getPokemon(id: string) {
    this.pokemonService
      .getOne(id)
      .subscribe(
        data => this.pokemon = data
      );
  }

  getCharacteristic(id: string) {
    this.characteristicService
      .getCharacteristic(id)
      .subscribe(
        data => this.characteristic = data
      );
  }
}
