import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewProductAction, SaveProductAction } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  productFormGroup?: FormGroup;
  state?: ProductsState;
  submitted: boolean = false;
  readonly StateEnum = ProductsStateEnum;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if (this.state?.dataState == ProductsStateEnum.NEW) {
        this.productFormGroup = this.fb.group({
          name: ["", Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          selected: [true, Validators.required],
          available: [true, Validators.required],
        });
      }
    })
  }

  onSaveProduct() {
    this.submitted = true;
    if (!this.productFormGroup?.valid) return;
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
  };

  newProduct() {
    this.store.dispatch(new NewProductAction({}));
  }

}
