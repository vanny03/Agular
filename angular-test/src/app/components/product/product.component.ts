import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  @ViewChild('myModal') model : ElementRef | undefined;

  productObj: products = new products();
  productList: products[] = [];

  ngOnInit(): void {
    const LocalData = localStorage.getItem("products");
    if(LocalData != null) {
      this.productList = JSON.parse(LocalData);
    }
  }

  // Open dialog
  openModel() {
    const model = document.getElementById("myModal");
    if(model != null) {
      model.style.display = "block";
    }
  }
  
  // Close dialog
  closeModal(){
    this.productObj = new products();
    if(this.model != null){
      this.model.nativeElement.style.display = "none";
    }
  }

  updateProduct(){
    const currentProduct = this.productList.find(m=>m.id === this.productObj.id);
    if(currentProduct!= undefined){
      currentProduct.name = this.productObj.name;
      currentProduct.price = this.productObj.price;
      currentProduct.description = this.productObj.description;
    };
    localStorage.setItem('products', JSON.stringify(this.productList));
    this.closeModal();
  }

  saveProduct(){
    console.log(this.productObj);
    const isLocalPresent = localStorage.getItem("products")

    if(isLocalPresent != null){
      const oldArray = JSON.parse(isLocalPresent);

      this.productObj.id = oldArray.length +1;

      oldArray.push(this.productObj);

      this.productList = oldArray;

      localStorage.setItem("products",JSON.stringify(oldArray));
    }

    else{
      const newArr = [];
      newArr.push(this.productObj);
      this.productObj.id = 1;
      this.productList = newArr;
      localStorage.setItem("products",JSON.stringify(newArr));
    }

    // Close dialog after create
    this.closeModal();
    this.productObj = new products();
    
  }

  // edit product
  editProduct(item: products){
    this.productObj = item;
    this.openModel();   
  }

  // delete product
  deleteProduct(){
    const index = this.productList.findIndex((m: any) => m.name == this.productObj.name);
    this.productList.splice(index, 1);
    localStorage.setItem("products",JSON.stringify(this.productList));
    this.closeModal();

    this._snackBar.open('Delete success', 'Thanks', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  } 
}

export class products {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.image = '';
    this.price = '';
    this.description = '';
  }
}
