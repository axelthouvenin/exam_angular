import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import {HttpClientModule} from "@angular/common/http";
import { CouleurDirective } from './directives/couleur.directive';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { FormsModule } from '@angular/forms';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantFormDetailComponent } from './components/restaurant-form-detail/restaurant-form-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantComponent,
    CouleurDirective,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    RestaurantFormDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
