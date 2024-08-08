// import { Component } from '@angular/core';
// import {ChangeDetectionStrategy} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';


// @Component({
//   selector: 'app-menu',
//   standalone: true,
//   imports: [MatCardModule, MatButtonModule],
//   templateUrl: './menu.component.html',
//   styleUrl: './menu.component.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush,
  
// })

// export class MenuComponent {

//   ngOnInit() {

//   }

//   url="./assets/images/cat.jpeg"
// }


import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'], // Corrected the property name
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  url: string = '../assets/images/cat2.jpg'; // Ensure correct initialization

  ngOnInit() {
    console.log(this.url); // Debugging to ensure the URL is set correctly
  }
}
