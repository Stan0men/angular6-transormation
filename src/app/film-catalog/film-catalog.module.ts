import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {TabsComponent} from './main/tabs/tabs.component';
import {FilmsListComponent} from './films-list/films-list.component';
import {FilmItemComponent} from './films-list/film-item/film-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [MainComponent, DetailsComponent, TabsComponent, FilmsListComponent, FilmItemComponent]
})
export class FilmCatalogModule {
}
