import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  PokemonService,
  CharacteristicsService
} from 'src/app/pokemon/services';
import { IPokemon, IPokemonFilter } from 'src/app/shared/models/pokemon';
import { ICharacteristic } from 'src/app/shared/models/characteristics';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private pokemonResponse: IPokemon;
  private characteristicResponse: ICharacteristic;

  constructor(
    private characteristicService: CharacteristicsService,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => this.getPokemon(params.get('id'))
      );
  }

  getPokemon(id: string) {
    this.pokemonService
      .getOne(id)
      .subscribe(
        data => {
          this.pokemonResponse = data;
          this.getCharacteristic(this.pokemonResponse.id);
        },
        erro => console.log(erro)
      );
  }

  getCharacteristic(id: number) {
    this.characteristicService
      .getCharacteristic(`${id}`)
      .subscribe(
        data => this.characteristicResponse = data,
        erro => console.log(erro)
      );
  }

  get pokemon(): IPokemonFilter {
    const {
      id,
      name,
      weight,
      height,
      stats,
      abilities,
      sprites: { front_default },
    } = this.pokemonResponse;

    const hp = stats.find(item => item.stat.name === 'hp').base_stat;
    const speed = stats.find(item => item.stat.name === 'speed').base_stat;
    const attack = stats.find(item => item.stat.name === 'attack').base_stat;
    const defense = stats.find(item => item.stat.name === 'defense').base_stat;
    const special_attack = stats.find(item => item.stat.name === 'special-attack').base_stat;
    const special_defense = stats.find(item => item.stat.name === 'special-defense').base_stat;
    const _abilities = abilities.map(item => `${item.ability.name}${item.is_hidden ? '(hidden)' : ''}`);

    return <IPokemonFilter>{
      id,
      hp,
      name,
      speed,
      height,
      weight,
      attack,
      defense,
      special_attack,
      special_defense,
      abilities: _abilities,
      photo_default: front_default
    };
  }

  get characteristic() {
    const {
      descriptions
    } = this.characteristicResponse;

    return {
      descriptions: descriptions.find(item => item.language.name === 'en')
    };
  }
}
