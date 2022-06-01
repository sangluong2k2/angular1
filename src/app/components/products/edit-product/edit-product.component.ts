import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: IProduct

  constructor(
    private productServices: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) { }
  id!: any

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']
    this.productServices.getProduct(this.id).subscribe((data) => this.product = data)
  }
  onUpdate(){
    this.productServices.updateProduct(this.product).subscribe(() => {
      this.router.navigate([''])
    })
  }
}