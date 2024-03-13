import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DisplayingMultipleProductsComponent } from './Components/displaying-multiple-products/displaying-multiple-products.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './Components/cards/cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Slide2AutoComponent } from './Components/slide2-auto/slide2-auto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroceryListComponent } from './Components/Fashion/grocery-list.component';
import { Slide2ManualComponent } from './Components/slide2-manual/slide2-manual.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { DisplaySelectedItemComponent } from './Components/display-selected-item/display-selected-item.component';
import { GenZFashionComponent } from './Components/gen-z-fashion/gen-z-fashion.component';
import { AllProductsService } from './Services/all-products.service';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { GroceryMenuComponent } from './Components/grocery-menu/grocery-menu.component';
import { BeautytoysComponent } from './Components/beautytoys/beautytoys.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { LoginComponent } from './Components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { LoginPopupComponent } from './Components/login-popup/login-popup.component';
import { HomeComponent } from './Components/home/home.component';
import { Slide3ManualComponent } from './Components/slide3-manual/slide3-manual.component';
import { Innercards1Component } from './Components/innercards1/innercards1.component';
import { ShopfyCreditUserComponent } from './Components/shopfy-credit-user/shopfy-credit-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { PincodeComponent } from './Components/pincode/pincode.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayingMultipleProductsComponent,
    CardsComponent,
    Slide2AutoComponent,
    GroceryListComponent,
    Slide2ManualComponent,
    ElectronicsComponent,
    DisplaySelectedItemComponent,
    GenZFashionComponent,
    MobilesComponent,
    GroceryMenuComponent,
    BeautytoysComponent,
    LaptopsComponent,
    LoginComponent,
    LoginPopupComponent,
    HomeComponent,
    Slide3ManualComponent,
    Innercards1Component,
    ShopfyCreditUserComponent,
    InvoiceComponent,
    PincodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    NgbRatingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    [AllProductsService],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
