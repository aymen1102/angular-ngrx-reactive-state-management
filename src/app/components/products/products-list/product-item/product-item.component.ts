import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProductAction, EditProductAction, SelectProductAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | null = null;

  constructor(
    private store: Store<any>,
    private router: Router) { }

  onSelectProduct(product: Product) {
    this.store.dispatch(new SelectProductAction(product));
  }

  onDeleteProduct(product: Product) {
    this.store.dispatch(new DeleteProductAction(product));
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl("/edit-product/" + product.id);
  }

}
