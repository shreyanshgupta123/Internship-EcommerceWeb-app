import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../Services/all-products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.scss'
})
export class LaptopsComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 30;

  constructor(private productService: AllProductsService,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly=true
   }

  ngOnInit(): void {
    this.productService.getAllProdGenZ().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}

