import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items
  checkoutForm
  constructor(
    private cartService : CartService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.items = this.cartService.getProducts()
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    })
  }

  onSubmit(customerData){
    this.items = cartService.clearCart()
    this.checkoutForm.reset()

    console.warn('Your order has been submitted', customerData);
  }
}