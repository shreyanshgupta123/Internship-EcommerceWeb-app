import { Component } from '@angular/core';
import { AllProductsService } from '../../Services/all-products.service';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  category: string;
  image: string;
}

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-display-selected-item',
  templateUrl: './display-selected-item.component.html',
  styleUrls: ['./display-selected-item.component.scss']
})
export class DisplaySelectedItemComponent {
  product: Product | undefined;
  Hidecomponent: boolean = false;
  products: Products | undefined;

  constructor(
    private productService: AllProductsService,
    private config: NgbRatingConfig,
    private route: Router
  ) {
    config.max = 5;
    config.readonly = true;
    const prodId = localStorage.getItem('selectedprodID');
    let productId: number;
    if (prodId) {
      productId = parseInt(prodId, 10);
      this.productService.getAllProducts().subscribe((products: Product[]) => {
        this.product = products.find(product => product.id === productId);
      });
    } else {
      this.productService.getAllProdGenZ().subscribe((products: Products[]) => {
        this.products = products.find(product => product.id === productId);
        
      });
    }
  }

  ngOnInit(): void {}

  payment() {
    this.route.navigate(['/Invoice']);
  }
}
