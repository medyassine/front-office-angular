import {Injectable} from '@angular/core';
import {ParamsService} from './params.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private param: ParamsService,
              private http: HttpClient) {
  }

/* modification de la requete (ajout 'authorization' | entetes ... ) */
  get(url, jwtHeader, httpOptions?): Observable<any> {
    if (!httpOptions) {
      httpOptions = this.getHeader(jwtHeader);
    }
    return new Observable(observer => {
      this.param.getParamEndPoint().subscribe((baseUrl) => {
        this.http.get(baseUrl + url, httpOptions).subscribe(
          (next) => observer.next(next),
          (error) => observer.error(error),
          () => observer.complete()
        );
      });
    });
  }

/* recuperation de l'entete */
  getHeader(jwtHeader: string) {
    let httpOptions;
    if (jwtHeader) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: jwtHeader,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '',
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
        })
      };
    }
    return httpOptions;
  }
}

