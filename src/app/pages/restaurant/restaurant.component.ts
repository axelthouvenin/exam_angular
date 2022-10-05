import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurants} from "../../dto/restaurants.dto";
import {RestaurantFormContent} from "../../components/restaurant-form/restaurant-form.component";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurants[] = [];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => this.restaurants = restaurants
    })
  }

  public createRestaurant(restaurant: RestaurantFormContent): void {
    this.restaurantService.createRestaurant(restaurant.nom, restaurant.adresse).subscribe({
      next: value => this.restaurants.push(value)
    })
  }


}
