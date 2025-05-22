import { Component } from '@angular/core';
import { SerieNavigationBoxComponent } from '../serie-navigation-box/serie-navigation-box.component';
import { SeriesBoxComponent } from '../series-box/series-box.component';
import { SeriesBoxEpisodesItemComponent } from '../series-box-episodes-item/series-box-episodes-item.component';
import { DescriptionComponent } from "../description/description.component";

@Component({
  selector: 'app-ver-serie',
  imports: [SerieNavigationBoxComponent, SeriesBoxComponent, SeriesBoxEpisodesItemComponent, DescriptionComponent],
  templateUrl: './ver-serie.component.html',
  styleUrl: './ver-serie.component.css'
})
export class VerSerieComponent {

}
