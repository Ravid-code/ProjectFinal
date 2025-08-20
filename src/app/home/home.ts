import { Component, signal } from '@angular/core';
import { CradProducts } from "../crad-products/crad-products";
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
@Component({
  selector: 'app-home',
  imports: [CradProducts,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public productService: ProductService) { }

  cart_item: any[] = [];
  AddToCart(product: any) {
    this.cartService.AddToCart(product);

  }
}

