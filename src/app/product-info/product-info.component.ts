import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  public product!: Product;

  private paramMapSub: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {
    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('productId'));

      this.product = this.productService.getProducts()
          .filter(p => p.productId === pId)[0];

    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.paramMapSub != null){
      this.paramMapSub.unsubscribe();
    }
  }

  public addToCart(){
    this.cartService.addToCart(this.product);
    alert("Added!");
  }

}
