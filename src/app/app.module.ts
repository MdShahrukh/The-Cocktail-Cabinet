import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './@data/view/header/header.component';
import { FooterComponent } from './@data/view/footer/footer.component';
import { AppRoutingModule } from './app.routing-module';
import { ApiService } from './@core/Services/api.service';
import { CocktailService } from './@core/Services/cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { CocktaiDetailsComponent } from './pages/cocktai-details/cocktai-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
