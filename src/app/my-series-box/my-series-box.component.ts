import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-series-box',
  imports: [],
  templateUrl: './my-series-box.component.html',
  styleUrl: './my-series-box.component.css'
})
export class MySeriesBoxComponent {
  @Input() titulo: string = "";

}
