import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path:'clients',
    loadChildren: () => import('./clients/clients.module').then(
      (m) => m.ClientsModule
    )
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(
      (m) => m.ProductsModule
    )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
