import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,RouterLink, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('labInput');
 products:any=[]
 cart_items:any[]=[];

  addtoCart(product:any){
    
    this.cart_items.push(product);
    localStorage.setItem('cart_items',JSON.stringify(this.cart_items));
    console.log(this.cart_items);
  }
}
