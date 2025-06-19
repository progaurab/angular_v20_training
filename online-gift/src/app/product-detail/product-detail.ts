// src/app/product-detail/product-detail.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    RouterLink,
    RouterLinkActive,
} from '@angular/router';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './product-detail.html',
    styleUrls: ['./product-detail.css'],
})
export class ProductDetailComponent {
    product: any;
    isInCart: boolean = false;
    errorMessage: string | null =null;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        const productId = this.route.snapshot.paramMap.get('id');
        if (productId) {
            this.productService.getProduct(productId).subscribe({
                next: (product) => {
                    this.product = product;
                    this.isInCart = this.cartService.isInCart(productId);
                    this.errorMessage = null;
                },
                error: (err) => {
                    console.error('Error fetching product: ', err);
                    this.errorMessage = "Product not found or an error occured."
                    this.product = null;
                }
            })






            // this.productService.getProduct(productId).subscribe((product) => {
            //     this.product = product;
            //     this.isInCart = this.cartService.isInCart(productId);
            // });
        } else {
            this.errorMessage = 'Invalid product id'
        }
    }

    addToCart(): void {
        if (this.product) {
            this.cartService.addItem(this.product.id);
            this.isInCart = true;
        }
    }
}