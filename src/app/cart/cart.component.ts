import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent{

  public items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems(); 
  }

  public deleteAllFromCart(){
    this.items = [];
    this.cartService.clearCart();
  }

  public buyFromCart(){
  }
  
    

}


  


