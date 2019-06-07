import {Component} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontOffice';
  stagiaire = '';

  constructor(private apiServie: ApiService) {
    this.apiServie.getStagiaireById(1994947)
      .subscribe(stagiaire => {
        this.stagiaire = stagiaire;
      }, error1 => {
        console.log(error1);
      });
  }

}
