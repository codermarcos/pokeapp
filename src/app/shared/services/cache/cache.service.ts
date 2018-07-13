import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  setStorage(key: string, value: any) {
    const now = new Date();
    const expireIn = new Date(now);
    expireIn.setMinutes(now.getMinutes() + 30);
    localStorage.setItem(key, JSON.stringify({ value, expireIn }));
  }

  getStorage(key: string) {
    const now = new Date();
    const storage = localStorage.getItem(key);
    if (storage) {
      const cache = JSON.parse(storage);

      if (new Date(cache.expireIn) < now) {
        localStorage.removeItem(key);
        return null;
      } else {
        return cache.value;
      }
    } else {
      return null;
    }
  }
}
