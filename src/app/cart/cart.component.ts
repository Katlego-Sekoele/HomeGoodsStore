import {Component, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: {product: ProductInterface, quantity: number}[] = []

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.cartItems = this.contentService.getCart()
  }

  clearCart(){
    this.contentService.clearCart()
    this.cartItems = this.contentService.getCart()
  }

  total(){
    return this.contentService.getTotal()
  }

}
