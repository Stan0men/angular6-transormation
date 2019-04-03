import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  items: object[] = [];

  constructor(public filmService: FilmService) {
  }

  ngOnInit() {
    this.items = this.filmService.getData();
  }


}
