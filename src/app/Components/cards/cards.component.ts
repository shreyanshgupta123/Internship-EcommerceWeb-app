import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AllProductsService } from '../../Services/all-products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  private breakpointObserver = inject(BreakpointObserver);
  trackByFn(index: number, item: any): number {
    return index;
  }
  constructor(private router: Router) {}
  HideComponent: boolean = true;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            imageUrl:
              'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100',
            title: 'Fashion',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100',
            title: 'Appliances',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100',
            title: 'Mobile',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100',
            title: 'Grocery',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100',
            title: 'Electronics',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100',
            title: 'HomeDecoration',
            cols: 1,
            rows: 1,
          },
          {
            imageUrl:
              'https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100',
            title: 'Beauty,toys&more',
            cols: 1,
            rows: 1,
          },
        ];
      }
      return [
        {
          imageUrl:
            'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100',
          title: 'Fashion',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100',

          title: 'Laptops',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100',
          title: 'Mobile',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100',
          title: 'Grocery',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100',
          title: 'Electronics',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100',
          title: 'HomeDecoration',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100',
          title: 'Beauty,toys&more',
          cols: 1,
          rows: 1,
        },
      ];
    })
  );
  onCardClick(title: string) {
    // Depending on the title, navigate to the corresponding route
    if (title === 'Fashion') {
      this.router.navigate(['/Fashion']);
      this.HideComponent = false;
    } else if (title === 'Electronics') {
      this.router.navigate(['/Electronics']);
      this.HideComponent = false;
    } else if (title === 'HomeDecoration') {
      this.router.navigate(['/HomeDecoration']);
      this.HideComponent = false;
    } else if (title === 'Mobile') {
      this.router.navigate(['/Mobile']);
      this.HideComponent = false;
    }else if (title === 'Grocery') {
      this.router.navigate(['/Grocery']);
      this.HideComponent = false;
    }else if (title === 'Beauty,toys&more') {
      this.router.navigate(['/Beauty,toys&more']);
      this.HideComponent = false;
  }else if (title === 'Laptops') {
    this.router.navigate(['/Laptops']);
    this.HideComponent = false;
}
}
}
