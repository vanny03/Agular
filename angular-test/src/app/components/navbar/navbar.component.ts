import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('user');
  }

  // Log out the user
  onLogout() {
    // Clear user data from localStorage or sessionStorage
    // localStorage.removeItem('user');

    // Optionally, clear all storage data
    // localStorage.clear();

    // Navigate the user back to the login page
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
}
