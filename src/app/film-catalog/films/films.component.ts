import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  items: object[] = [];

  constructor(public filmService: FilmService) {
  }

  ngOnInit() {
    this.items = this.filmService.getData();
  }


}
