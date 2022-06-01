import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    DetailProductComponent,
    ProductComponent,
    AdminLayoutComponent,
    WebsiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
