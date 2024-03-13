import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../Services/all-products.service';
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
interface Products{
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
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent implements OnInit {
  products: Product[] = [];
  Hidecomponent: boolean = false;
  products2:Products[]=[];

  constructor(private productService: AllProductsService,config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productService.getAllProdGenZ().subscribe((products2: Products[]) => { // Fixed closing parentheses
        this.products2 = products2;
      });
    });
  }
}
