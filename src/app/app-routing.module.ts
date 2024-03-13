import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './Components/Fashion/grocery-list.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { GenZFashionComponent } from './Components/gen-z-fashion/gen-z-fashion.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { GroceryMenuComponent } from './Components/grocery-menu/grocery-menu.component';
import { BeautytoysComponent } from './Components/beautytoys/beautytoys.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginPopupComponent } from './Components/login-popup/login-popup.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthGuard } from './Services/auth-guard.service';
import { HomeComponent } from './Components/home/home.component';
import { ShopfyCreditUserComponent } from './Components/shopfy-credit-user/shopfy-credit-user.component';
import { DisplaySelectedItemComponent } from './Components/display-selected-item/display-selected-item.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'Fashion', component: GroceryListComponent},
  { path: 'Electronics', component: ElectronicsComponent},
  { path: 'HomeDecoration', component: GenZFashionComponent},
  { path: 'Mobile', component: MobilesComponent},
  { path: 'Grocery', component: GroceryMenuComponent},
  { path: 'Beauty,toys&more', component: BeautytoysComponent},
  { path: 'Laptops', component: LaptopsComponent},
  { path: 'Login-popup', component: LoginPopupComponent },
  { path: 'login',component: LoginComponent},
  {path:'credituser',component:ShopfyCreditUserComponent},
  {path :'Displayproduct',component:DisplaySelectedItemComponent},
  {path:'Invoice',component:InvoiceComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
