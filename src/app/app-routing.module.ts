import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListingsComponent} from "./listings/listings.component";
import {DecorComponent} from "./decor/decor.component";
import {KitchenwareComponent} from "./kitchenware/kitchenware.component";
import {FurnitureComponent} from "./furniture/furniture.component";
import {ProductComponent} from "./product/product.component";
import {AboutComponent} from "./about/about.component";
import {CartComponent} from "./cart/cart.component";
import {ContactComponent} from "./contact/contact.component";
import {PolicyComponent} from "./policy/policy.component";
import {RefundsComponent} from "./refunds/refunds.component";
import {FaqComponent} from "./faq/faq.component";

const routes: Routes = [
  {path: 'listings/decor', component: DecorComponent, data: {category: 'decor'}},
  {path: 'listings/kitchenware', component: KitchenwareComponent, data: {category: 'kitchenware'}},
  {path: 'listings/furniture', component: FurnitureComponent, data: {category: 'furniture'}},
  {path: 'product/:name', component: ProductComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'refunds', component: RefundsComponent},
  {path: 'faq', component: FaqComponent},
  {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
