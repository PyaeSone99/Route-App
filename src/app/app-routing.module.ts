import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookDetailsComponent } from './product/book-details/book-details.component';
import { CartViewComponent } from './product/cart-view/cart-view.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'book',
    pathMatch : "full"
  },
  {
    path : 'first',
    component : FirstComponent
  },
  {
    path : 'second',
    component : SecondComponent
  },
  {
    path : 'book',
    component : ProductListComponent
  },
  {
    path : 'books/:id',
    component : BookDetailsComponent
  },
  {
    path : 'cart-view',
    component : CartViewComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
