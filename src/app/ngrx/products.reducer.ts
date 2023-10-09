import { Action } from "@ngrx/store"
import { Product } from "../model/product.model"
import { ProductsActions, ProductsActionsTypes } from "./products.actions"

export enum ProductsStateEnum {
    INITIAL = 'Initial',
    LOADING = 'Loading',
    SUCCESS = 'Success',
    NEW = 'NEW',
    UPDATED = 'UPDATED',
    EDIT = 'EDIT',
    ERROR = 'Error'
}

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: ProductsStateEnum,
    currentProduct?: Product | null,
    currentAction: ProductsActions | null
}

const initState: ProductsState = {
    products: [],
    errorMessage: " ",
    dataState: ProductsStateEnum.INITIAL,
    currentProduct: null,
    currentAction: null
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
    switch (action.type) {
        /* GET ALL PRODUCTS */
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* GET SELECTED PRODUCTS */
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* GET AVAILABLE PRODUCTS */
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* NEW PRODUCT */
        case ProductsActionsTypes.NEW_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.NEW, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.NEW_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* SAVE PRODUCT */
        case ProductsActionsTypes.SAVE_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
            let products = [...state.products];
            products.push((<ProductsActions>action).payload);
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: products, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* SEARCH PRODUCTS */
        case ProductsActionsTypes.SEARCH_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* SELECT PRODUCT */
        case ProductsActionsTypes.SELECT_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
            let product: Product = (<ProductsActions>action).payload;
            let productsList0 = [...state.products];
            let data: Product[] = productsList0.map(p => (p.id == product.id) ? product : p)
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: data, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* DELETE PRODUCT */
        case ProductsActionsTypes.DELETE_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
            let p: Product = (<ProductsActions>action).payload;
            let index = state.products.indexOf(p);
            let productsList1 = [...state.products];
            productsList1.splice(index, 1);
            return { ...state, dataState: ProductsStateEnum.SUCCESS, products: productsList1, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* EDIT PRODUCT */
        case ProductsActionsTypes.EDIT_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.SUCCESS, currentProduct: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        /* UPDATE PRODUCT */
        case ProductsActionsTypes.UPDATE_PRODUCT:
            return { ...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS:
            let updatedProduct: Product = (<ProductsActions>action).payload;
            let productsList2 = state.products.map(p => (p.id == updatedProduct.id) ? updatedProduct : p);
            return { ...state, dataState: ProductsStateEnum.UPDATED, products: productsList2, currentAction: <ProductsActions>action }
        case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action }

        default: return { ...state }
    }
}