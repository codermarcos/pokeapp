import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-root',
  templateUrl: './pokemon-root.component.html',
  styleUrls: ['./pokemon-root.component.scss']
})
export class PokemonRootComponent implements OnInit {

  constructor(pokemonService: PokemonService) {
    pokemonService.getAll()
      .subscribe(
        d => console.log(d)
      );
  }

  ngOnInit() {
  }

}
