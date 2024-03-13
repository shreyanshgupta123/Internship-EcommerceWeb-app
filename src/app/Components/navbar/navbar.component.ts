import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route:Router){}
Hidecomponent:boolean=false;

loginPopupVisible: boolean = false;

login() {
   this.route.navigateByUrl('/login');
}

closePopup() {
  this.loginPopupVisible = false;
}

shopfycrdusr()
{
  this.route.navigate(['/credituser']);
  this.Hidecomponent=true;
}
}
