import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor(private http: HttpClient,
              private param: ParamsService,
  ) {
    /* insertion de l'url de l'api backend dans le local storage */
    const obs: Observable<any> = this.http.get('/assets/config/config.json');
    obs.subscribe(retour => {
      localStorage.setItem('endpointApi', retour.ApiEndpoint);
    });
  }

  /* récuperation de l'url backend */
  getParamEndPoint(): Observable<string> {
    return new Observable(observer => {
      const process = setInterval(() => {
        if (localStorage.getItem('endpointApi')) {
          observer.next(localStorage.getItem('endpointApi'));
          clearInterval(process);
        }
      }, 100);
    });
  }


}


