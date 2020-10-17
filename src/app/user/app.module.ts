import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShareComponent } from './share/share.component';
import { AllproductComponent } from './main/allproduct/allproduct.component';
import { BlogComponent } from './main/blog/blog.component';
import { BodyComponent } from './main/body/body.component';
import { ContantComponent } from './main/contant/contant.component';
import { IntroduceComponent } from './main/introduce/introduce.component';
import { ShoppingcartComponent } from './main/shoppingcart/shoppingcart.component';
import { SinglePostComponent } from './main/single-post/single-post.component';
import { SingleProductComponent } from './main/single-product/single-product.component';
import { BannerComponent } from './share/banner/banner.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShareComponent,
    AllproductComponent,
    BlogComponent,
    BodyComponent,
    ContantComponent,
    IntroduceComponent,
    ShoppingcartComponent,
    SinglePostComponent,
    SingleProductComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
