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

  constructor(private apiService: ApiService) { }

  public getAll(offset?: string, limit?: string): Observable<IResponsePokemon> {
    return this.apiService
      .get<IResponsePokemon>(`pokemon`, { params: { offset, limit } });
  }

  public getOne(id: string): Observable<IPokemon> {
    return this.apiService
      .get<IPokemon>(`pokemon/${id}`);
  }
}
