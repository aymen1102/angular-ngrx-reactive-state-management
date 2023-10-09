import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProductAction, UpdateProductAction } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  productFormGroup?: FormGroup;
  state?: ProductsState;
  submitted: boolean = false;
  productID: number;
  formBuilt?: boolean;
  readonly StateEnum = ProductsStateEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<any>
  ) {
    this.productID = activatedRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productID));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if (this.state?.dataState == ProductsStateEnum.SUCCESS) {
        this.productFormGroup = this.fb.group({
          id: [this.state?.currentProduct?.id],
          name: [this.state?.currentProduct?.name, Validators.required],
          price: [this.state?.currentProduct?.price, Validators.required],
          quantity: [this.state?.currentProduct?.quantity, Validators.required],
          selected: [this.state?.currentProduct?.selected],
          available: [this.state?.currentProduct?.available],
        });
        this.formBuilt = true;
      }
    })
  }

  onEditProduct() {
    this.submitted = true;
    if (!this.productFormGroup?.valid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }

  okUpdated() {
    this.router.navigateByUrl("/products")
  }

}
