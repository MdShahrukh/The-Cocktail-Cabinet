import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './@data/view/header/header.component';
import { FooterComponent } from './@data/view/footer/footer.component';
import { CocktaiDetailsComponent } from './pages/cocktai-details/cocktai-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';

import { ApiService } from './@core/Services/api.service';
import { CocktailService } from './@core/Services/cocktail.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CocktaiDetailsComponent,
    CocktailListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [
    ApiService,
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
