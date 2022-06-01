import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';




const routes: Routes = [
  { path: "", component:WebsiteLayoutComponent },
  {
    path: "admin", component: AdminLayoutComponent,  children: [
      {path: "product", component: ProductComponent},
      { path: ":id", component: DetailProductComponent },
      { path: ":id/edit", component: EditProductComponent },
      { path: "add", component: AddProductComponent },
     
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }