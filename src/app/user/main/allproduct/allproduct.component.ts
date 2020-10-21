import { BaseComponent } from 'src/app/lib/base-component';
import { BannerComponent } from './../../share/banner/banner.component';
import { Component, OnInit, Injector} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/lib/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector) { 
    super(injector)
  }
  allitem : any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get("api/sanpham/get_san_pham").subscribe(res=>{      
        this.allitem = res;
        console.log(this.allitem);
      })
    })
  }
  add_cart(it){
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }

}
