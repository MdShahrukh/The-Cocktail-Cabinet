import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';
import { CocktailsData, Drink } from 'src/app/@data/models/drinks';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService, private activatedRouter: ActivatedRoute) { }
  drinks$: BehaviorSubject<any[]> = new BehaviorSubject<Drink[]>([]);
  drinks: Drink[];
  filterType: string;
  filterValue: string;
  offset = 0;
  isLoading = true;
  ngOnInit() {
    const params$ = this.activatedRouter.queryParams.subscribe((params: any) => {
      if (params && params.filterType != null) {
        this.cocktailService.getfilteredCocktailList(params.filterType, params.value).subscribe((data: CocktailsData) => {
          this.drinks$.next([]);
          if (data.drinks && data.drinks.length > 0) {
            this.drinks = data.drinks;
          } else {
            this.drinks = [];
          }
          this.filterType = params.filterType;
          this.filterValue = params.value;
          this.setItemsToDisplay(this.drinks, 0);
        });
      }
    });

  }


  getCocktailDetails(drink) {
    drink.showDetails = !drink.showDetails;
    if (drink.showDetails) {
      drink.isLoading = true;
      this.cocktailService.getCocktailById(drink.idDrink).subscribe((data: CocktailsData) => {
        const drinks = this.drinks$.getValue();
        const dr = drinks.find(d => d.idDrink === drink.idDrink);
        data.drinks[0].showDetails = drink.showDetails;
        data.drinks[0].isLoading = false;
        drinks[drinks.indexOf(dr)] = data.drinks[0];
        this.drinks$.next(drinks);
      });
    }
  }


  setItemsToDisplay(drinks, offset) {
    const newDrinks = drinks.slice(offset, environment.BATCH_SIZE + offset);
    const currentDrinks = this.drinks$.getValue();
    this.offset = offset + newDrinks.length;
    this.drinks$.next(currentDrinks.concat(newDrinks));
    this.isLoading = false;
  }

  onScroll() {
    this.isLoading = true;
    this.setItemsToDisplay(this.drinks, this.offset);
  }
}
