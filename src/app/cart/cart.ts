import { Component } from '@angular/core';
import { ProductService } from '../service/product-service';
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, FormsModule, NgFor],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  showInvoice = false;
  selectedItems: any[] = [];
  invoiceTotal = 0;
  totalPrice = 0;

  constructor(public cartService: CartService) { }



  hasSelectedItems(): boolean {
    return this.cartService.GetCartItems().some(item => item.is_selected && item.qty > 0);
  }
  updateTotal() {
    this.totalPrice = this.cartService.GetCartItems()
      .filter(item => item.is_selected)
      .reduce((sum, item) => sum + item.price * item.qty, 0);
  }
  openInvoice() {
    this.selectedItems = this.cartService.GetCartItems().filter(item => item.is_selected);
    this.invoiceTotal = this.selectedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (this.selectedItems.length > 0) {
      this.showInvoice = true;
    }
  }

  // Close invoice popup
  closeInvoice() {
    this.showInvoice = false;
  }
}
