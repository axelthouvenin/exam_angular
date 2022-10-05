import {Component, Input, OnInit} from '@angular/core';
import {Restaurants} from "../../dto/restaurants.dto";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {
  @Input()
  public restaurants: Restaurants[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
