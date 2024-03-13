import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../Services/all-products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
  selector: 'app-grocery-menu',
  templateUrl: './grocery-menu.component.html',
  styleUrl: './grocery-menu.component.scss'
})
export class GroceryMenuComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 30;
  constructor(private productService: AllProductsService,config: NgbRatingConfig,private route: Router) {
    config.max = 5;
    config.readonly=true
   }

  ngOnInit(): void {
    this.productService.getAllProdGenZ().subscribe((data: any) => {
      this.products = data.products;
    });
  }
  addTobuy(id:number){
    const foundProduct = this.products.find(item => item.id === id);
    if (foundProduct) {
      localStorage.setItem('selectedProduct', JSON.stringify(foundProduct));
      localStorage.setItem('selectedprodID',JSON.stringify(foundProduct.id));
this.route.navigate(['/Displayproduct']);
  }
}
}
