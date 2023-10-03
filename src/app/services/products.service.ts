import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn: "root"})
export class ProductsService {
 
    public host: string = "http://localhost:3000";

    constructor(private http: HttpClient) {

    }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.host + "/products");
    }

    getSelectedProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.host + "/products?selected=true");
    }

    getAvaliableProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.host + "/products?available=true");
    }

    searchProducts(keyword: any): Observable<Product[]> {
        return this.http.get<Product[]>(this.host + "/products?name_like="+ keyword);
    }

    selectProduct(product: Product): Observable<Product> {
        product.selected = !product.selected;
        return this.http.put<Product>(this.host + "/products/" + product.id, product);
    }

    deleteProduct(product: Product): Observable<void> {
        return this.http.delete<void>(this.host + "/products/" + product.id);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.host + "/products", product)
    }

    getProductById(productId: number): Observable<Product> {
        return this.http.get<Product>(this.host + "/products/" + productId);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(this.host + "/products/" + product.id, product);
    }
}