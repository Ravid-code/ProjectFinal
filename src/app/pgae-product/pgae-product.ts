import { Component } from '@angular/core';
import { ProductService } from '../service/product-service';
import { CradProducts } from "../crad-products/crad-products";
import { CartService } from '../service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pgae-product',
  imports: [CradProducts, RouterLink],
  templateUrl: './pgae-product.html',
  styleUrl: './pgae-product.css'
})
export class PgaeProduct {
  constructor(public productService: ProductService, public cartService: CartService) {

  }
  AddToCart(product: any) {
    this.cartService.AddToCart(product);
  }
}
