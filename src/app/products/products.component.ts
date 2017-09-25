import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) {}
  
     navigateToServices(){
       this.router.navigate(['/services']);
     }
  ngOnInit() {
  }

}
