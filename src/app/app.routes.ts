import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarSerieComponent } from './agregar-serie/agregar-serie.component';
import { VerSerieComponent } from './ver-serie/ver-serie.component';
import { CargosComponent } from './cargos/cargos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'agregar-serie', component: AgregarSerieComponent},
    { path: 'ver-serie', component: VerSerieComponent},
    { path: 'cargos', component: CargosComponent}
];
