import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPokemonCard } from 'src/app/shared/models/pokemon';
import { FlyOutAnimation } from 'src/app/shared/animations/fly-out.animation';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  animations: [FlyOutAnimation]
})
export class PokemonListComponent {

  @Input() pokemons: Array<IPokemonCard> = [];
  @Output() click = new EventEmitter();
  constructor() { }

}
