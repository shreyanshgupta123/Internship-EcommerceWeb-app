import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../Services/all-products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  category: string;
  image: string;
}
@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  products: Product[] = [];
  Hidecomponent: boolean = false;
  constructor(private productService: AllProductsService,config: NgbRatingConfig,private route: Router) {
    config.max = 5;
		config.readonly = true;
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
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
