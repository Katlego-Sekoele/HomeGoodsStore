import {Component, OnInit} from '@angular/core';
import {ContentService, ProductInterface} from "../content.service";

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css']
})
export class DecorComponent implements OnInit{

  content: ProductInterface [] | undefined
  hasContent: boolean = false

  constructor(private contentService: ContentService) {

  }

  ngOnInit(): void {
    this.content = this.contentService.getDecor()
    this.hasContent = true
  }

}
