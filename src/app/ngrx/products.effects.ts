import { Injectable } from "@angular/core"
import { ProductsService } from "../services/products.service"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Observable, mergeMap, map, catchError, of } from "rxjs"
import { DeleteProductErrorAction, DeleteProductSuccessAction, EditProductErrorAction, EditProductSuccessAction, GetAllProductsErrorAction, GetAllProductsSuccessAction, GetAvailableProductsErrorAction, GetAvailableProductsSuccessAction, GetSelectedProductsErrorAction, GetSelectedProductsSuccessAction, NewProductSuccessAction, ProductsActions, ProductsActionsTypes, SaveProductErrorAction, SaveProductSuccessAction, SearchProductsErrorAction, SearchProductsSuccessAction, SelectProductErrorAction, SelectProductSuccessAction, UpdateProductErrorAction, UpdateProductSuccessAction } from "./products.actions"

@Injectable()
export class ProductsEffects {

    constructor(
        private productsService: ProductsService,
        private effectAction: Actions) { }


    getAllProductsEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action: ProductsActions) => {
            return this.productsService.getAllProducts().pipe(
                map((products) => new GetAllProductsSuccessAction(products)),
                catchError((err) => of(new GetAllProductsErrorAction(err.message)))
            )
        })
    )
    )

    getSelectedProductsEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
        mergeMap((action: ProductsActions) => {
            return this.productsService.getSelectedProducts().pipe(
                map((products) => new GetSelectedProductsSuccessAction(products)),
                catchError((err) => of(new GetSelectedProductsErrorAction(err.message)))
            )
        })
    )
    )

    getAvailableProductsEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
        mergeMap((action: ProductsActions) => {
            return this.productsService.getAvaliableProducts().pipe(
                map((products) => new GetAvailableProductsSuccessAction(products)),
                catchError((err) => of(new GetAvailableProductsErrorAction(err.message)))
            )
        })
    )
    )

    newProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.NEW_PRODUCT),
        map((action: ProductsActions) => {
            return new NewProductSuccessAction({});
        })
    )
    )

    saveProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.SAVE_PRODUCT),
        mergeMap((action: ProductsActions) => {
            return this.productsService.saveProduct(action.payload).pipe(
                map((product) => new SaveProductSuccessAction(product)),
                catchError((err) => of(new SaveProductErrorAction(err.message)))
            )
        })
    )
    )

    searchProductsEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
        mergeMap((action: ProductsActions) => {
            return this.productsService.searchProducts(action.payload).pipe(
                map((products) => new SearchProductsSuccessAction(products)),
                catchError((err) => of(new SearchProductsErrorAction(err.message)))
            )
        })
    )
    )

    selectProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.SELECT_PRODUCT),
        mergeMap((action: ProductsActions) => {
            return this.productsService.selectProduct(action.payload).pipe(
                map((products) => new SelectProductSuccessAction(products)),
                catchError((err) => of(new SelectProductErrorAction(err.message)))
            )
        })
    )
    )

    deleteProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.DELETE_PRODUCT),
        mergeMap((action: ProductsActions) => {
            return this.productsService.deleteProduct(action.payload).pipe(
                map((products) => new DeleteProductSuccessAction(products)),
                catchError((err) => of(new DeleteProductErrorAction(err.message)))
            )
        })
    )
    )

    editProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.EDIT_PRODUCT),
        mergeMap((action: ProductsActions) => {
            return this.productsService.getProductById(action.payload).pipe(
                map((products) => new EditProductSuccessAction(products)),
                catchError((err) => of(new EditProductErrorAction(err.message)))
            )
        })
    )
    )

    updateProductEffect$: Observable<ProductsActions> = createEffect(() => this.effectAction.pipe(
        ofType(ProductsActionsTypes.UPDATE_PRODUCT),
        mergeMap((action: ProductsActions) => {
            return this.productsService.updateProduct(action.payload).pipe(
                map((products) => new UpdateProductSuccessAction(products)),
                catchError((err) => of(new UpdateProductErrorAction(err.message)))
            )
        })
    )
    )
}