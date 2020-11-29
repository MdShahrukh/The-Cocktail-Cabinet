import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';
import { FILTER_TYPES } from 'src/app/@data/app-contstants';
import { CocktailsData, Drink } from 'src/app/@data/models/drinks';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService, private activatedRouter: ActivatedRoute) { }
  drinks: BehaviorSubject<any[]> = new BehaviorSubject<Drink[]>([]);
  filterType: string;
  filterValue: string;
  ngOnInit() {
    const params$ = this.activatedRouter.queryParams.subscribe((params: any) => {
      if (params && params.filterType != null) {
        this.cocktailService.getfilteredCocktailList(params.filterType, params.value).subscribe((data: CocktailsData) => {
          if (data.drinks && data.drinks.length > 0) {
            this.drinks.next(data.drinks);
          } else {
            this.drinks.next([]);
          }

          this.filterType = params.filterType;
          this.filterValue = params.value;
        });
      }
    });

  }


  getCocktailDetails(drink) {
    drink.showDetails = !drink.showDetails;
    if (drink.showDetails) {
      drink.isLoading = true;
      this.cocktailService.getCocktailById(drink.idDrink).subscribe((data: CocktailsData) => {
        const drinks = this.drinks.getValue();
        const d = drinks.find(d => d.idDrink === drink.idDrink);
        data.drinks[0].showDetails = drink.showDetails;
        data.drinks[0].isLoading = false;
        drinks[drinks.indexOf(d)] = data.drinks[0];
        this.drinks.next(drinks);
        console.log(d);
      });
    }
  }
}
