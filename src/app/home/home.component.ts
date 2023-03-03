import {Component, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  sub_text = 'Our company is dedicated to providing high-quality furniture, decor, kitchenware, and other home goods items that enhance the comfort, style, and functionality of our customers\' homes. We strive to offer a diverse and unique selection of products that cater to a variety of tastes and budgets, while also providing exceptional customer service and a seamless shopping experience. Our mission is to help our customers create spaces they love and feel proud to call home.'
  content: ProductInterface[] | undefined
  constructor(private contentService: ContentService) {

  }

  ngOnInit(): void {
    this.content = this.contentService.getContent()
  }
}
