import { Routes } from "@angular/router"

export default [
  {
    path: 'products', loadComponent: ()=> import('../products-list/products-list.component')
  },
  {
    path: 'product/:id',
    loadComponent: ()=> import('../products-details/products-details.component')
  }
]as Routes
