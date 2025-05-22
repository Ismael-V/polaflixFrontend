import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-serie-box-item',
  imports: [],
  templateUrl: './list-serie-box-item.component.html',
  styleUrl: './list-serie-box-item.component.css'
})
export class ListSerieBoxItemComponent {
  @Input() titulo: string = ""
}
