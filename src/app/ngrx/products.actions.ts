import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductsActionsTypes {
    /* GET ALL PRODUCTS */
    GET_ALL_PRODUCTS = '[Product] Get all products',
    GET_ALL_PRODUCTS_SUCCESS = '[Product] Get all products success',
    GET_ALL_PRODUCTS_ERROR = '[Product] Get all products error',

    /* GET SELECTED PRODUCTS */
    GET_SELECTED_PRODUCTS = '[Product] Get selected products',
    GET_SELECTED_PRODUCTS_SUCCESS = '[Product] Get selected products success',
    GET_SELECTED_PRODUCTS_ERROR = '[Product] Get selected products error',

    /* GET AVAILABLE PRODUCTS */
    GET_AVAILABLE_PRODUCTS = '[Product] Get available products',
    GET_AVAILABLE_PRODUCTS_SUCCESS = '[Product] Get available products success',
    GET_AVAILABLE_PRODUCTS_ERROR = '[Product] Get available products error',

    /* NEW PRODUCT */
    NEW_PRODUCT = '[Product] New product',
    NEW_PRODUCT_SUCCESS = '[Product] New product success',
    NEW_PRODUCT_ERROR = '[Product] New product product error',

    /* SAVE PRODUCT */
    SAVE_PRODUCT = '[Product] Save product',
    SAVE_PRODUCT_SUCCESS = '[Product] Save product success',
    SAVE_PRODUCT_ERROR = '[Product] Save product product error',

    /* SEARCH PRODUCTS */
    SEARCH_PRODUCTS = '[Product] Search products',
    SEARCH_PRODUCTS_SUCCESS = '[Product] Search products success',
    SEARCH_PRODUCTS_ERROR = '[Product] Search products error',

    /* SELECT PRODUCT */
    SELECT_PRODUCT = '[Product] Select product',
    SELECT_PRODUCT_SUCCESS = '[Product] Select product success',
    SELECT_PRODUCT_ERROR = '[Product] Select product error',

    /* DELETE PRODUCT */
    DELETE_PRODUCT = '[Product] Delete product',
    DELETE_PRODUCT_SUCCESS = '[Product] Delete product success',
    DELETE_PRODUCT_ERROR = '[Product] Delete product error',

    /* EDIT PRODUCT */
    EDIT_PRODUCT = '[Product] Edit product',
    EDIT_PRODUCT_SUCCESS = '[Product] Edit product success',
    EDIT_PRODUCT_ERROR = '[Product] Edit product error',

    /* EDIT PRODUCT */
    UPDATE_PRODUCT = '[Product] Update product',
    UPDATE_PRODUCT_SUCCESS = '[Product] Update product success',
    UPDATE_PRODUCT_ERROR = '[Product] Update product error',
}

/* GET ALL PRODUCTS */
export class GetAllProductsAction implements Action {
    type: string = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetAllProductsSuccessAction implements Action {
    type: string = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetAllProductsErrorAction implements Action {
    type: string = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

/* GET SELECTED PRODUCTS */
export class GetSelectedProductsAction implements Action {
    type: string = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetSelectedProductsSuccessAction implements Action {
    type: string = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetSelectedProductsErrorAction implements Action {
    type: string = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

/* GET AVAILABLE PRODUCTS */
export class GetAvailableProductsAction implements Action {
    type: string = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetAvailableProductsSuccessAction implements Action {
    type: string = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetAvailableProductsErrorAction implements Action {
    type: string = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

/* NEW PRODUCT */
export class NewProductAction implements Action {
    type: string = ProductsActionsTypes.NEW_PRODUCT;
    constructor(public payload: any) { }
}

export class NewProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}

export class NewProductErrorAction implements Action {
    type: string = ProductsActionsTypes.NEW_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

/* SAVE PRODUCT */
export class SaveProductAction implements Action {
    type: string = ProductsActionsTypes.SAVE_PRODUCT;
    constructor(public payload: Product) { }
}

export class SaveProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

export class SaveProductErrorAction implements Action {
    type: string = ProductsActionsTypes.SAVE_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

/* SEARCH PRODUCTS */
export class SearchProductsAction implements Action {
    type: string = ProductsActionsTypes.SEARCH_PRODUCTS;
    constructor(public payload: string) { }
}

export class SearchProductsSuccessAction implements Action {
    type: string = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class SearchProductsErrorAction implements Action {
    type: string = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

/* SELECT PRODUCT */
export class SelectProductAction implements Action {
    type: string = ProductsActionsTypes.SELECT_PRODUCT;
    constructor(public payload: Product) { }
}

export class SelectProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

export class SelectProductErrorAction implements Action {
    type: string = ProductsActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

/* DELETE PRODUCT */
export class DeleteProductAction implements Action {
    type: string = ProductsActionsTypes.DELETE_PRODUCT;
    constructor(public payload: Product) { }
}

export class DeleteProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}

export class DeleteProductErrorAction implements Action {
    type: string = ProductsActionsTypes.DELETE_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

/* EDIT PRODUCT */
export class EditProductAction implements Action {
    type: string = ProductsActionsTypes.EDIT_PRODUCT;
    constructor(public payload: any) { }
}

export class EditProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.EDIT_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

export class EditProductErrorAction implements Action {
    type: string = ProductsActionsTypes.EDIT_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

/* UPDATE PRODUCT */
export class UpdateProductAction implements Action {
    type: string = ProductsActionsTypes.UPDATE_PRODUCT;
    constructor(public payload: any) { }
}

export class UpdateProductSuccessAction implements Action {
    type: string = ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

export class UpdateProductErrorAction implements Action {
    type: string = ProductsActionsTypes.UPDATE_PRODUCT_ERROR;
    constructor(public payload: string) { }
}

export type ProductsActions =
    GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
    GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction |
    SearchProductsAction | SearchProductsSuccessAction | SearchProductsErrorAction |
    SelectProductAction | SelectProductSuccessAction | SelectProductErrorAction |
    DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction |
    GetAvailableProductsAction | GetAvailableProductsSuccessAction | GetAvailableProductsErrorAction |
    NewProductAction | NewProductSuccessAction | NewProductErrorAction |
    SaveProductAction | SaveProductSuccessAction | SaveProductErrorAction |
    EditProductAction | EditProductSuccessAction | EditProductErrorAction |
    UpdateProductAction | UpdateProductSuccessAction | UpdateProductErrorAction;