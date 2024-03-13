import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AllProductsService } from '../../Services/all-products.service';
interface Product {
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
  selector: 'app-gen-z-fashion',
  templateUrl: './gen-z-fashion.component.html',
  styleUrl: './gen-z-fashion.component.scss'
})
export class GenZFashionComponent implements OnInit {

  products: Product[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 30;

  constructor(private productService: AllProductsService,config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
  }
  ngOnInit(): void {
    this.productService.getAllProdGenZ().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
