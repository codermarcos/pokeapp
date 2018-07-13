import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: IPokemon;

  constructor(
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
    this.pokemonService
      .getOne(id)
      .subscribe(
        (data) => this.pokemon = data
      );
  }
}
