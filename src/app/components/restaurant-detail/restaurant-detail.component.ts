import {Component, Input, OnInit} from '@angular/core';
import {evaluation, Restaurants} from "../../dto/restaurants.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant?: Restaurants;
  public evaluations: evaluation[] = [];


  constructor (private _activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) {}
    ngOnInit():void {
      this._activatedRoute.params.subscribe( (params: Params) => {
        this.restaurantService.getRestaurantById(params['id']).subscribe( (restaurant: Restaurants) => {
          this.restaurant = restaurant
          this.evaluations = restaurant.evaluations
        })
      })
    }







}
