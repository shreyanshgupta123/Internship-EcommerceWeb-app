import { Component, OnInit } from '@angular/core';
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
  selector: 'app-displaying-multiple-products',
  templateUrl: './displaying-multiple-products.component.html',
  styleUrls: ['./displaying-multiple-products.component.scss'] // Use styleUrls instead of styleUrl
})
export class DisplayingMultipleProductsComponent implements OnInit {
  products: Product[] = []; // Initialize products as an array of Product

  constructor(private svr: AllProductsService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.svr.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
