import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';
import { CacheService } from 'src/app/shared/services/cache/cache.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

const { protocol, path, versionPath } = env.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public basePath = `${protocol}${path}${versionPath}`;

  constructor(
    private http: HttpClient,
    private cache: CacheService,
    private loadingService: LoadingService
  ) { }

  public get<T>(url: string, options?: Object): Observable<T> {
    this.loadingService.start();

    const cache = this.getCache(url, options);

    if (cache) {
      this.loadingService.end();
      return of(cache);
    } else {
      return this.http
        .get<T>(`${this.basePath}${url}`, options)
        .pipe(
          map(
            data => {
              this.loadingService.end();
              return this.cacheMe<T>(url, data, options);
            }
          )
        );
    }
  }

  private cacheMe<T>(url: string, data: T, params?: Object): T {
    this.cache.setStorage(url, data, params);
    return data;
  }

  private getCache(url: string, params?: Object) {
    return this.cache.getStorage(url, params);
  }
}
