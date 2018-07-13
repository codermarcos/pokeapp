import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { CacheService } from '../cache/cache.service';
const { protocol, path, versionPath } = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public basePath = `${protocol}${path}${versionPath}`;

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) { }

  public get<T>(url: string, options?: Object): Observable<T> {
    const cache = this.getCache(url);

    if (cache) {
      return of(cache);
    } else {
      return this.http
        .get<T>(`${this.basePath}${url}`, options)
        .pipe(
          map(
            data => this.cacheMe<T>(url, data)
          )
        );
    }
  }

  private cacheMe<T>(url: string, data: T): T {
    this.cache.setStorage(url, data);
    return data;
  }

  private getCache(url: string) {
    return this.cache.getStorage(url);
  }
}
