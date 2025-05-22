import { Component } from '@angular/core';
import { FacturasNavBoxComponent } from "../facturas-nav-box/facturas-nav-box.component";
import { FacturasBoxComponent } from "../facturas-box/facturas-box.component";
import { FacturasSummaryComponent } from "../facturas-summary/facturas-summary.component";
import { FacturasEntryComponent } from "../facturas-entry/facturas-entry.component";

@Component({
  selector: 'app-cargos',
  imports: [FacturasNavBoxComponent, FacturasBoxComponent, FacturasSummaryComponent, FacturasEntryComponent],
  templateUrl: './cargos.component.html',
  styleUrl: './cargos.component.css'
})
export class CargosComponent {

}
