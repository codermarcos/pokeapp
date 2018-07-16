import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPokemonCard } from 'src/app/shared/models/pokemon';
import { Pagination } from 'src/app/shared/models/pagination';

import { PokemonService } from 'src/app/pokemon/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  public pokemons: Array<IPokemonCard> = [];
  public pagination = new Pagination(5);

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPage(this.pagination);
  }

  search(id: string) {
    this.router.navigate(['/pokemon', id]);
  }

  getPage({ offset, limit }) {
    this.pokemonService
      .getAll(offset, limit)
      .subscribe(
        (data) => this.setPage(data),
        erro => console.log(erro)
      );
  }

  setPage({ results, count }) {
    this.pokemons = [];
    this.pagination.length = count;
    this.makeAnimation(results, this.pokemons);
  }

  makeAnimation(from: Array<IPokemonCard>, to: Array<IPokemonCard>) {
    from.forEach(
      (item, i) => setTimeout(
        () => to.push(item), 100 * i
      )
    );
  }

  next() {
    if (!this.pagination.next()) { return; }
    this.getPage(this.pagination);
  }

  prev() {
    if (!this.pagination.prev()) { return; }
    this.getPage(this.pagination);
  }


}
