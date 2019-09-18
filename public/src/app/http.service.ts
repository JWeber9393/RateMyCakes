import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    
  }

  allCakes(){
    return this._http.get('/cakes')
  }
  createCake(newCake){
    return this._http.post('/cakes', newCake)
  }
  updateCake(rateCake, review){
    return this._http.put(`/cakes/${rateCake._id}`, review)
  }
  deleteCake(cake){
    return this._http.delete(`/cakes/${cake._id}`, cake)
  }
}
