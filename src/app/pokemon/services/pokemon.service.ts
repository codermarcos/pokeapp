import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { ApiService } from 'src/app/shared/services';
import { IPokemon, IPokemonList } from 'src/app/shared/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private all: IPokemonList;
  private one: IPokemon;

  constructor(private apiService: ApiService) { }

  public setAll(all: IPokemonList): IPokemonList {
    return this.all = all;
  }

  public getAll(): Observable<IPokemonList> {
    if (this.all) {
      return of(this.all);
    } else {
      return this.apiService
        .get<IPokemonList>(`pokemon`)
        .pipe(
          map(
            data => this.setAll(data)
          )
        );
    }
  }

  public setOne(one: IPokemon): IPokemon {
    return this.one = one;
  }

  public getOne(id: string): Observable<IPokemon> {
    if (this.one) {
      return of(this.one);
    } else {
      return this.apiService
        .get<IPokemon>(`pokemon/${id}`)
        .pipe(
          map(
            data => this.setOne(data)
          )
        );
    }
  }
}
