import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomPipePipe } from "../custom/custom-pipe-pipe";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-crad-products',
  imports: [CustomPipePipe, RouterLink],
  templateUrl: './crad-products.html',
  styleUrl: './crad-products.css'
})
export class CradProducts {
  @Input() product: any;
  @Output() onAddToCart: any = new EventEmitter<any>();

  addtoCart(product: any) {
    this.onAddToCart.emit(product);
  }

}
