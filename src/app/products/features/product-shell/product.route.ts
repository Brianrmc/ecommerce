import { Path } from './../../../../../node_modules/resolve.exports/index.d';
import { Routes } from "@angular/router"

export default [
  {path: '', loadComponent: ()=> import('../products-list/products-list.component')}
]as Routes
