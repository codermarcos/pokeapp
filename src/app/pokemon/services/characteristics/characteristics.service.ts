import { Injectable } from '@angular/core';
import { ICharacteristic } from 'src/app/shared/models/characteristics';
import { ApiService } from 'src/app/shared/services/api';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private characteristic: ICharacteristic;

  constructor(private apiService: ApiService) { }

  public setCharacteristic(characteristic: ICharacteristic): ICharacteristic {
    return this.characteristic = characteristic;
  }

  public getCharacteristic(id: string): Observable<ICharacteristic> {
    if (this.characteristic) {
      return of(this.characteristic);
    } else {
      return this.apiService
        .get<ICharacteristic>(`characteristic/${id}`)
        .pipe(
          map(
            data => this.setCharacteristic(data)
          )
        );
    }
  }
}
