import { Component } from '@angular/core';
import { MySeriesBoxComponent } from '../my-series-box/my-series-box.component';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-inicio',
  imports: [MySeriesBoxComponent, BannerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
