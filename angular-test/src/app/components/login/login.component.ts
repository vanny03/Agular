import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Correct import for Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Add RouterModule to the imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Correct the styleUrls
})
export class LoginComponent {

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
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert("Registration on Success");
  }

  // Login conditions
  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);
      const isUserFound = users.find((m: any) => m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if (isUserFound != undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Your username or password is wrong");
      }
    }
  }
}
