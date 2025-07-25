
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/products'; // Use JSON Server or real API

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getProduct(id: string | number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${Number(id)}`); // dynamic routing
    }
}