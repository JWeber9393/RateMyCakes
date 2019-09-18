import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cakes';
  cakes = [];
  viewCake: any;
  newCake: any;
  review: any;
  totalRating: any;
  // editCake: any;


  constructor(private _httpService: HttpService) {
    this.getCakesFromService();
  }
  
  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {baker:"", imageUrl:""};
    this.review = { rater: "", comment: "", rating: 0 };
  }
  
  
  getCakesFromService(){
    let obs = this._httpService.allCakes();
    obs.subscribe(data => {
      this.cakes = data['info'];
    })
  }

  showCake(cake){
    this.viewCake = cake
    this.getCakesFromService();
  }
  
  onSubmit(){
    let obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data => {
      // console.log("Got data from post back", data);
      this.newCake = { baker: "", imageUrl: ""};
      this.getCakesFromService();
    })
  }
  
  onRate(cake){
    let obs = this._httpService.updateCake(cake, this.review);
    obs.subscribe(data => {
      // console.log(`inCOmponentOnRate*********************${JSON.stringify(data)}****************************DATA`);
      // console.log(`inCOmponentOnRate*********************${cake}****************************CAKE`);
      this.review = cake
      this.getCakesFromService();
    })
  }

  onDelete(cake){
    let obs = this._httpService.deleteCake(cake);
    obs.subscribe(data => {
      // console.log("Deleting this cake", data);
      this.getCakesFromService();
    })
  }
}


