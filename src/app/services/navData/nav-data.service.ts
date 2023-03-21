import { Injectable } from '@angular/core';
import { NavDataServiceInterface } from 'src/app/interfaces/navData.interface';

@Injectable({
  providedIn: 'root',
})
export class NavDataService {
  constructor() {}
  navbarData: NavDataServiceInterface[] = [
    {
      routeLink: 'home',
      icon: 'fal fa-home',
      label: 'Home',
    },
    {
      routeLink: 'clients',
      icon: 'fal fa-users',
      label: 'Clientes',
    },
    {
      routeLink: 'sales',
      icon: 'fal fa-shopping-basket',
      label: 'Ventas',
    },
    {
      routeLink: 'purchases',
      icon: 'fal fa-cart-arrow-down',
      label: 'Compras',
    },
    {
      routeLink: 'till',
      icon: 'fal fa-fax',
      label: 'Caja',
    },
    {
      routeLink: 'stock-control',
      icon: 'fal fa-cubes',
      label: 'Inventario',
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Productos',
    },
    {
      routeLink: 'reports',
      icon: 'fal fa-file',
      label: 'Reportes',
    },
  ];
  public getNavData() {
    return this.navbarData;
  }

}
