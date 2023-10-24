import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'projects/integrate/src/lib/api.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = {
        name: this.productForm.value.name,
        price: this.productForm.value.price
      };

      this.apiService.createProduct(productData)
        .subscribe((response: any) => {
          console.log('Product created successfully:', response);
          this.productForm.reset(); // Reset the form after successful submission
        },
        (error: any) => {
          console.error('Error creating product:', error);
        });
    }
  }
}
