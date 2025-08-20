import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../service/product-service';
import { CartService } from '../service/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public cartService: CartService) {

  }
}
