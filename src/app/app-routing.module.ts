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
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path:'clients',
    loadChildren: () => import('./pages/clients/clients.module').then(
      (m) => m.ClientsModule
    )
  },
  {
    path:'products',
    loadChildren: () => import('./pages/products/products.module').then(
      (m) => m.ProductsModule
    )
  },
  {
    path:'purchases',
    loadChildren: () => import('./pages/purchases/purchases.module').then(
      (m) => m.PurchasesModule
    )
  },
  {
    path:'reports',
    loadChildren: () => import('./pages/reports/reports.module').then(
      (m) => m.ReportsModule
    )
  },
  {
    path:'sales',
    loadChildren: () => import('./pages/sales/sales.module').then(
      (m) => m.SalesModule
    )
  },
  {
    path:'stock-control',
    loadChildren: () => import('./pages/stock-control/stock-control.module').then(
      (m) => m.StockControlModule
    )
  },
  {
    path:'till',
    loadChildren: () => import('./pages/till/till.module').then(
      (m) => m.TillModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
