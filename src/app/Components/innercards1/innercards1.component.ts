import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-innercards1',
  templateUrl: './innercards1.component.html',
  styleUrl: './innercards1.component.scss'
})
export class Innercards1Component {
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
            title: 'Camera',
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
        ];
      }
      return [
        {
          imageUrl:
            'https://rukminim1.flixcart.com/image/240/240/xif0q/dslr-camera/e/h/v/dmc-g85kgw-k-16-dmc-g85kgw-k-panasonic-original-imagzknqpwukucj8.jpeg?q=80',
          title: 'DSLRs',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim1.flixcart.com/image/240/240/xif0q/headphone/i/h/q/new-edition-tws-m19-gaming-earbuds-bluetooth-5-0-wireless-led-original-imagk7qyfxshhhvh.jpeg?q=80',

          title: 'Earbuds',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim1.flixcart.com/image/240/240/krwec280/role-play-toy/z/f/w/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.jpeg?q=80',
          title: 'Cameras',
          cols: 1,
          rows: 1,
        },
        {
          imageUrl:
            'https://rukminim1.flixcart.com/image/240/240/kx9as280/smart-band-tag/r/2/h/oled-no-free-size-15-yes-yes-id116-smartwatch-with-heartrate-original-imag9rhtjcgpczha.jpeg?q=80',
          title: 'Watches',
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
