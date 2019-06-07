import {Injectable} from '@angular/core';
import {HttpUtilService} from './http-util.service';
import {ParamsService} from './params.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private httpUtil: HttpUtilService,
              private param: ParamsService,
              private cookieService: CookieService) {
  }

  // TODO
  getToken(): string {
    return this.cookieService.get('TODO');
  }

  getStagiaireById(id: any): Observable<any> {
    return this.httpUtil.get(`/stagiaire/${id}`,
      null, null) as Observable<any>;
  }
}
