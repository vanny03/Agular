import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @ViewChild('myModal') model : ElementRef | undefined;

  productObj: products = new products();

  // Open dialog
  openModel() {
    const model = document.getElementById("myModal");
    if(model != null) {
      model.style.display = "block";
    }
  }
  
  // Close dialog
  closeModal(){
    if(this.model != null){
      this.model.nativeElement.style.display = "none";
    }
  }

  saveProduct(){
    console.log(this.productObj);
    const isLocalPresent = localStorage.getItem("products")

    if(isLocalPresent != null){
      const oldArray = JSON.parse(isLocalPresent);
      oldArray.push(this.productObj);
      localStorage.setItem("products",JSON.stringify(oldArray));
    }

    else{
      const newArr = [];
      newArr.push(this.productObj);
      localStorage.setItem("products",JSON.stringify(newArr));
    }
    
  }
}


export class products {
  name: string;
  image: string;
  description: string;

  constructor() {
    this.name = '';
    this.image = '';
    this.description = '';
  }
}
