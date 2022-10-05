import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantComponent} from "./pages/restaurant/restaurant.component";
import {RestaurantDetailComponent} from "./components/restaurant-detail/restaurant-detail.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: "full"
  },
  {
    path: 'restaurants', component:RestaurantComponent
  },
  {
    path: 'restaurants/:id', component:RestaurantDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
