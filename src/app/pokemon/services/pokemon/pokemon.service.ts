import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { ApiService } from 'src/app/shared/services';
import { IPokemon, IPokemonCard, IResponsePokemon } from 'src/app/shared/models/pokemon';
import { HttpParams } from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private all: Array<IPokemonCard>;
  private params: HttpParams;
  private one: IPokemon;

  constructor(private apiService: ApiService) { }

  public setAll(all: Array<IPokemonCard>): Array<IPokemonCard> {
    return this.all = all;
  }

  public getAll(offset?: string, limit?: string): Observable<Array<IPokemonCard>> {
    if (
      this.all &&
      this.params &&
      this.params.get('limit') === limit &&
      this.params.get('offset') === offset
    ) {
      console.log(this.params.get('limit'), limit, 'here')
      return of(this.all);
    } else {
      this.params = new HttpParams()
      .set('offset', offset)
      .set('limit', limit);
      console.log(this.params.get('limit'), limit)

      return this.apiService
        .get<IResponsePokemon>(`pokemon`, { params: this.params })
        .pipe(
          map(
            data => this.setAll(data.results)
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
