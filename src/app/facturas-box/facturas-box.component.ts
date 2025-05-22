import { Component } from '@angular/core';
import { FacturasSummaryComponent } from "../facturas-summary/facturas-summary.component";

@Component({
  selector: 'app-facturas-box',
  imports: [FacturasSummaryComponent],
  templateUrl: './facturas-box.component.html',
  styleUrl: './facturas-box.component.css'
})
export class FacturasBoxComponent {

}
