import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import { ListingsComponent } from './listings/listings.component';
import { KitchenwareComponent } from './kitchenware/kitchenware.component';
import { DecorComponent } from './decor/decor.component';
import { FurnitureComponent } from './furniture/furniture.component';
import {CommonModule} from "@angular/common";
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { PolicyComponent } from './policy/policy.component';
import { RefundsComponent } from './refunds/refunds.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    KitchenwareComponent,
    DecorComponent,
    FurnitureComponent,
    ProductComponent,
    AboutComponent,
    CartComponent,
    ContactComponent,
    FaqComponent,
    PolicyComponent,
    RefundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
