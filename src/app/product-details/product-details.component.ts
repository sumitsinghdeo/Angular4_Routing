import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
  
})
export class ProductDetailsComponent implements OnInit {
  private selectedId: number;
  constructor(private route: ActivatedRoute) { }
  sub:any='';

  ngOnInit() {
    this.sub = this.route.snapshot.params.id;
    // this.sub = this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   this.selectedId = id;
    //   console.log(id);
    //  });
    
    }
  }


