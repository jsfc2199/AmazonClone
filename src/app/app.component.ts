import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { Producto} from './model/products.model';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'AmazonClone';

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private http: HttpClient) {
    effect(()=>{
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
    })
  }

  // darkMode = signal<boolean>(false)
  darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'))

  @HostBinding('class.dark') get mode(){
    return this.darkMode()
  }


  // ngOnInit() {
  //   this.fetchProducts();
  // }

  // fetchProducts() {
  //   this.http
  //     .get<Producto[]>(
  //       'https://clone-a290a-default-rtdb.firebaseio.com/productos.json'
  //     )
  //     .subscribe((product) => {
  //       product.forEach((item, i) => {
  //         console.log(i + 1, item.product_result.title);
  //       });
  //     });
  // }

}
