import { Component } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { ListSerieBoxComponent } from "../list-serie-box/list-serie-box.component";
import { SerieDescriptionComponent } from "../serie-description/serie-description.component";

@Component({
  selector: 'app-agregar-serie',
  imports: [SearchBoxComponent, ListSerieBoxComponent, SerieDescriptionComponent],
  templateUrl: './agregar-serie.component.html',
  styleUrl: './agregar-serie.component.css'
})
export class AgregarSerieComponent {

}
