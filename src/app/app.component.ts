import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoNavbarComponent } from './logo-navbar/logo-navbar.component';
import { MySeriesBoxComponent } from "./my-series-box/my-series-box.component";

@Component({
  selector: 'app-root',
  imports: [LogoNavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'polaflixFrontend';
}
