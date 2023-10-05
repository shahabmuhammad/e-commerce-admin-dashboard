import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryManagmentComponent } from './components/inventory-managment/inventory-managment.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'home',
    component:DashboardComponent,
    title:'Home'
  },
  {
    path:'inventory-management',
    component:InventoryManagmentComponent,
    title:'Inventory Management'
  },
  {
    path:'products',
    component: ProductComponent,
    title:'Products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
