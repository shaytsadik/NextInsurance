import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCfg, apiMap } from '../interfaces/api-cfg.interface';
import { Observable, throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultHeaders = { 'Content-Type': 'application/json' };

  constructor(private httpClient: HttpClient) { }

  api(cfg: ApiCfg) {
    if (!apiMap[cfg.type]) {
      console.error('no such api type in apiMap');
      throw 'dataService.api exception';
    }
    return this.httpClient.request(apiMap[cfg.type].method, this.getUrl(cfg))
      .pipe(
        take(1),
        catchError(err => this.errorHandler(err, cfg))
      );
  }

  private errorHandler(err, cfg: ApiCfg): Observable<any> {
    //implement error handling
    if (cfg.disableErrorHandler || err.status == 403) {
      return throwError(err);
    }

    return throwError(err);
  }

  private getUrl(cfg: ApiCfg): string {
    //?format=json should be implemented in a seperate interceptor
    return apiMap[cfg.type].url + (cfg.urlParams ? cfg.urlParams : "") + '?format=json';
  }
}
