import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './components/all-product/all-product.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { FormCreateComponent } from './components/form-create/form-create.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductComponent
  },
  {
    path: 'product/create',
    component: FormCreateComponent
  },
  {
    path: 'product/:id',
    component: OneProductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
