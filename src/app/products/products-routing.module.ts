import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
