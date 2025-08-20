import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart_item: any[] = [];
  expectedPrice = []

  constructor() {
    const cartItem = localStorage.getItem('cart_item')
    this.Cart_item = cartItem ? JSON.parse(cartItem) : [];
  }
  AddToCart(product: any) {


    const existingItem = this.Cart_item.find(item => item.id === product.id);

    if (existingItem) {

      existingItem.qty += 1;
    } else {
      product.qty = 1;
      this.Cart_item.push(product);
    }
    localStorage.setItem('cart_item', JSON.stringify(this.Cart_item));
  }
  GetCartItems() {
    return this.Cart_item;
  }
  UpdateQty(item: any, qty: number) {
    item.qty = qty;
    localStorage.setItem('cart_item', JSON.stringify(this.Cart_item));
  }
  GetTotal(): number {
    return this.Cart_item.reduce((total, item) => {
      return total + (item.price * item.qty);
    }, 0);
  }

  RemoveFromCart(itemId: number) {
    if (confirm("Do you want to delete ?")) {
      this.Cart_item = this.Cart_item.filter(item => item.id !== itemId);
      localStorage.setItem('cart_item', JSON.stringify(this.Cart_item));
    }
  }
  getTotalSelected() {
    return this.Cart_item
      .filter(item => item.is_selected && item.qty > 0)
      .reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
}

