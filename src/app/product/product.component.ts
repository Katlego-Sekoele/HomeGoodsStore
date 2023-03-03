import {Component, Input, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product: ProductInterface | undefined;
  quantity: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let productName = params['name'];
      this.product = this.contentService.getProduct(productName)
    });
  }

  addToCart(){
    if (this.product && this.quantity > 0){
      this.contentService.addToCart(this.product, this.quantity)
      this.router.navigate(['cart'])
    }
  }

}
