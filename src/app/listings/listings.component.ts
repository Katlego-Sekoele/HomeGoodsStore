import {Component, Input, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit{

  @Input() content: ProductInterface[] | undefined = []

  constructor(private contentService: ContentService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  getAverageRating(product: ProductInterface){
    let average = 0;
    let count = 0
    for (const review of product.reviews) {
      count++;
      average += review.rating
    }
    average = average/count
    return average
  }

  link(item: ProductInterface): string {
    let name = item.name
    /*name = name.replaceAll(' ', '')*/
    return name
  }

}
