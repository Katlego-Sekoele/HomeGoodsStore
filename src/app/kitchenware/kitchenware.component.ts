import {Component, Input, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";

@Component({
  selector: 'app-kitchenware',
  templateUrl: './kitchenware.component.html',
  styleUrls: ['./kitchenware.component.css']
})
export class KitchenwareComponent implements OnInit{

  content: ProductInterface [] | undefined
  hasContent: boolean = false

  constructor(private contentService: ContentService) {

  }

  ngOnInit(): void {
    this.content = this.contentService.getKitchenware()
    this.hasContent = true
  }
}
