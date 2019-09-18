import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() cakeToShow: any;

  cakeRating: any;

  constructor() { }

  ngOnInit() {
    let sum = 0;
    for(let star of this.cakeToShow.review){
      sum += star.rating;
    }
    this.cakeRating = sum/this.cakeToShow.review.length;
  }

}
