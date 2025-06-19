// src/app/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import {
    RouterModule,
    RouterLink,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RouterLink,
    ],
    templateUrl: './product-list.html',
    styleUrls: ['./product-list.css'],
})
export class ProductListComponent implements OnInit {
    products: any[] = [];
    filteredProducts: any[] = [];
    searchQuery: string = '';
    sortCriteria: string = 'name';

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
            this.filteredProducts = [...this.products];
        });
    }

    searchProducts(): void {
        console.log('Searching..: ', this.searchQuery);
        this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    sortProducts(): void {
        console.log('Sorting By..: ', this.sortCriteria);
        if (this.sortCriteria === 'name') {
            this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); 
        } else if (this.sortCriteria === 'priceAsc') {
            this.filteredProducts.sort((a, b) => a.price - b.price);
        } else if (this.sortCriteria === 'priceDesc') {
            this.filteredProducts.sort((a, b) => b.price - a.price);
        }
    }
}