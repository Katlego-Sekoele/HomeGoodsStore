import {Component, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit{

  content: ProductInterface [] | undefined
  hasContent: boolean = false

  constructor(private contentService: ContentService) {

  }

  ngOnInit(): void {
    this.content = this.contentService.getFurniture()
    this.hasContent = true
  }
}
