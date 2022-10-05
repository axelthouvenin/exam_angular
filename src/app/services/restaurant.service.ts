import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {evaluation, Restaurants} from "../dto/restaurants.dto";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  //récupère tous les restaurants
  public getRestaurants(): Observable<Restaurants[]>{
    return this.httpClient.get<Restaurants[]>('http://localhost:8080/restaurants')
  }

  //créer un restaurant
  public createRestaurant(nom: string, adresse: string): Observable<Restaurants> {
    return this.httpClient.post<Restaurants>(`http://localhost:8080/restaurants`, {nom: nom, adresse: adresse})
  }

  //récupère restaurant par id
  public getRestaurantById(id: number): Observable<Restaurants>{
    return this.httpClient.get<Restaurants>('http://localhost:8080/restaurants/' + id)
  }

  //deleteEval
  public deleteData(idLivre:  number, idEval: number) {
    return this.httpClient.delete<evaluation[]>(`http://localhost:8080/restaurants/${idLivre}/evaluations/${idEval}`);
  }
}
