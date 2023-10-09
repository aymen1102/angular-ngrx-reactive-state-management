import { ProductsActionsTypes } from './../../../ngrx/products.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetAvailableProductsAction, GetSelectedProductsAction, SearchProductsAction } from 'src/app/ngrx/products.actions';
import { ProductsState } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  state: ProductsState | null = null;
  readonly ProductsActions = ProductsActionsTypes;

  constructor(
    private router: Router,
    private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.state = state.catalogState;
    })
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  onGetAvailableProducts() {
    this.store.dispatch(new GetAvailableProductsAction({}));
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm?.keyword));
  }

  onNewProduct() {
    this.router.navigateByUrl("/new-product")
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl("/edit-product/" + product.id);
  }
}
