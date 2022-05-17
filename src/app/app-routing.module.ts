import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/main/about', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
   },
   { path: '**', redirectTo: ''}
];
 

 @NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
   exports: [RouterModule]
 })

 export class AppRoutingModule {

 }
