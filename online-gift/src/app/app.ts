import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
        RouterOutlet,
        NavbarComponent,
        CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-gift';
}
