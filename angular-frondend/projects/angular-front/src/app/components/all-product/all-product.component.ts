import { Component, OnInit } from '@angular/core';
import { ApiService } from 'projects/integrate/src/lib/api.service';
import { Product } from 'projects/models/product.interface';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) {

  }
  
  // There is something called memory leak in Angular.
  // To prevent memory leak, we need to unsubscribe from the observables.
  // We can do that by implementing OnDestroy interface.
  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe(
      res => this.products = res
    );
  }

}
