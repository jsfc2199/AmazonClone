import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto} from './model/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AmazonClone';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http
      .get<Producto[]>(
        'https://clone-a290a-default-rtdb.firebaseio.com/productos.json'
      )
      .subscribe((product) => {
        product.forEach((item, i) => {
          console.log(i + 1, item.product_result.title);
        });
      });
  }

}
