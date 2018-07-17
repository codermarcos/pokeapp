import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  PokemonService,
  CharacteristicsService
} from 'src/app/pokemon/services';
import { ICharacteristic } from 'src/app/shared/models/characteristics';
import { IPokemon, IPokemonFilter, IStat } from 'src/app/shared/models/pokemon';

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

  getStat(stats: Array<IStat>, name: string): number {
    const stat = stats.find(e => e.stat.name === name);
    return stat ? stat.base_stat || 0 : 0;
  }

  get pokemon(): IPokemonFilter {
    if (!this.pokemonResponse) {
      return {};
    } else {
      const {
        id,
        name,
        weight,
        height,
        stats,
        abilities,
        sprites,
      } = this.pokemonResponse;

      let hp,
        speed,
        attack,
        defense,
        _abilities,
        special_attack,
        special_defense;

      if (stats) {
        hp = this.getStat(stats, 'hp');
        speed = this.getStat(stats, 'speed');
        attack = this.getStat(stats, 'attack');
        defense = this.getStat(stats, 'defense');
        special_attack = this.getStat(stats, 'special-attack');
        special_defense = this.getStat(stats, 'special-defense');
      }

      const photo_default = sprites && sprites.front_default ? sprites.front_default : '';

      if (abilities) {
        _abilities = abilities.map(item => `${item.ability.name}${item.is_hidden ? '(hidden)' : ''}`);
      }

      return <IPokemonFilter>{
        id,
        hp,
        name,
        speed,
        height,
        weight,
        attack,
        defense,
        photo_default,
        special_attack,
        special_defense,
        abilities: _abilities
      };
    }
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
