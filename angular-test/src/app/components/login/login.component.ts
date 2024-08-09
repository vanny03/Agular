import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Correct import for Router

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HttpClient } from '@angular/common/http';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule,MatFormFieldModule, MatSelectModule, MatButtonModule], // Add RouterModule to the imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Correct the styleUrls
})
export class LoginComponent {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}


  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: ''
  };

  userLogin: any = {
    userName: '',
    password: ''
  };

  router = inject(Router); // Correctly inject Router

  // Register conditions
  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem("user");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("user", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("user", JSON.stringify(localArray));
    }
    alert("Registration on Success");
    this._snackBar.open('Login success', 'Thanks', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  // Login conditions
  onLogin() {
    // debugger;
    const isLocalData = localStorage.getItem("user");
    if (isLocalData != null) {
      // alert success
      this._snackBar.open('Login success', 'Thanks', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    
      const users = JSON.parse(isLocalData);
      const isUserFound = users.find((m: any) => m.userName == this.userLogin.userName && m.password == this.userLogin.password)
      console.log(isUserFound);
      
      if (isUserFound != undefined) {
        this.router.navigateByUrl('home');
      } 

      // alert wrong login
      else {
        this._snackBar.open('Your username or password is wrong', 'OK!!', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }
  }
}
