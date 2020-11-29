import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';
import { CocktailsData, Drink } from 'src/app/@data/models/drinks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomDrink: Drink;
  constructor(private cocktailService: CocktailService) {

  }

  ngOnInit() {
    this.randomDrink = new Drink();
    this.cocktailService.getRandomCocktail().subscribe((data: CocktailsData) => {
      this.randomDrink = data.drinks[0];
    });
  }
}
