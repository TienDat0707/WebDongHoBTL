import { BaseComponent } from './../../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import {CartService} from'./../../../lib/cart.service';
declare let alertify:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(private injector :Injector , private categoryService: CartService) { 
    super(injector)
  }
  categories:any;
  item: any;
  itemldm:any;
  itemcart:any;
  totalprice:any;
  totalproduce:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this._api.get('api/danhmuc/get_all_danh_muc').subscribe(res =>{
        this.item = res;
        console.log(this.item);
        setTimeout(()=>{
          this.loadScripts();
        })
      }) 
      this._api.get('api/Loaisanpham/get_loai_san_pham').subscribe(res=>{
        this.itemldm = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    }) 
    // this.categoryService.getItems.pipe(first()).subscribe((categories)=>{this.categories=categories})
    this._cart.items.subscribe(res=>{
      this.itemcart = res;
      console.log(res);
      this.totalprice = 0;
      this.totalproduce = 0;
      for(let i of res){
        this.totalproduce += 1;
        this.totalprice = this.totalprice + i.soluong*i.gia;
      }
    })
  }
  deleteCart(id){
    this._cart.deleteItem(id);
    alert("Xóa thành công")
  }
  
}
