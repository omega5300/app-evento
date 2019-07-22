import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'votacion', loadChildren: './votacion/votacion.module#VotacionPageModule' },
  { path: 'estadisticas', loadChildren: './estadisticas/estadisticas.module#EstadisticasPageModule' },
  { path: '**', loadChildren: './notfound/notfound.module#NotfoundPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
