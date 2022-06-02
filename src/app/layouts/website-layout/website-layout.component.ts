import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {
  productList!: IProduct[];

  constructor(private productServices: ProductService) {
    this.showProducts();
   }

  ngOnInit(): void {
  }
  showProducts(){
    this.productServices.getProducts().subscribe(data => {this.productList = data
    })
  }
  
}
