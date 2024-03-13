import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: any;
  username: string = '';
  password: string = '';

  loginhide:boolean=true
  hidecomponent:boolean=false;
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getUser(token).subscribe({
        next: (user) => {
          this.user = user;
          console.log('User:', user);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    } else {
      console.error('Token not found in local storage.');
    }
  }
  constructor(private authService: AuthService,private route:Router) {}
  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        const token = response.token;
        console.log('Token:', token);
        localStorage.setItem('token', token);
        console.log('User:',this.user);
        localStorage.setItem('userid',this.user.id);
        if(token)
        {
          this.loginhide=false
        this.route.navigateByUrl('/credituser')
        }
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });

  }
}
