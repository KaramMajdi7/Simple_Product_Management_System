import { Component, OnInit } from '@angular/core';
import { ApiService } from 'projects/integrate/src/lib/api.service';
import { Product } from 'projects/models/product.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
  // @ts-ignore
  product: Observable<Product>;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.apiService.getProductById(id);
    });
  }

}
