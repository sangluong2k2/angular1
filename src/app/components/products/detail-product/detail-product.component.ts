import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  productDetail!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productServices: ProductService
    ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.productServices.getProduct(+id).subscribe(data => this.productDetail = data)
  }

  ngOnInit(): void {
  }

}
