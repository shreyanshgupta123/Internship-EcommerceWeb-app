import { Component, OnInit } from '@angular/core';

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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  product: Product | undefined;
  items: Product[] = [];

  total: number | undefined;

  constructor() { }

  ngOnInit() {
    const storedItems = localStorage.getItem('selectedProduct');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      if (Array.isArray(this.items)) {
        this.total = this.calculateTotal(this.items);
      } else {
        this.items = []; 
        this.total = 0;
      }
    }
  }

  calculateTotal(items: Product[]): number {
    return items.reduce((total, item) => total + item.price, 0);
  }


}
