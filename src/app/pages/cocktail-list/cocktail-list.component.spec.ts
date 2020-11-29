import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';
import { Drink } from 'src/app/@data/models/drinks';

import { CocktailListComponent } from './cocktail-list.component';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {}, queryParams: {} }
  } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([]), InfiniteScrollModule ],
      declarations: [CocktailListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Cocktail-list component', () => {
  let component: CocktailListComponent;
  let service: CocktailService;
  beforeEach(() => {
    service = new CocktailService(null);
    component = new CocktailListComponent(service, null);
  });

  it('should get the data from cocktailService', () => {
    // Arrange
    const drink = { idDrink: 1, strDrink: 'cocktail', isLoading: false, showDetails: false };
    const spy = spyOn(service, 'getCocktailById').and.returnValue(new Observable());

    // Act
    component.getCocktailDetails(drink);

    // Assert
    expect(spy).toHaveBeenCalledWith(drink.idDrink);
    expect(drink.showDetails).toBe(true);
  });


  it('should not call cocktailService to get Data', () => {
    // Arrange
    const drink = { idDrink: 1, strDrink: 'cocktail', isLoading: false, showDetails: true };
    const spy = spyOn(service, 'getCocktailById').and.returnValue(new Observable());

    // Act
    component.getCocktailDetails(drink);

    // Assert
    expect(spy).not.toHaveBeenCalledWith(drink.idDrink);
    expect(drink.showDetails).toBe(false);
  });

  it('should set the data to drinks observable and set showDetails to drinks observable', () => {
    // Arrange
    const drink = { idDrink: 1, strDrink: 'cocktail', isLoading: false, showDetails: false };
    const spy = spyOn(service, 'getCocktailById').and.returnValue(of([
      {
        drinks: [drink]
      }
    ]));

    // Act
    component.getCocktailDetails(drink);

    // Assert
    expect(spy).toHaveBeenCalledWith(drink.idDrink);
    expect(drink.showDetails).toBe(true);
  });

  it('should load the new batch of contents on scroll', () => {
    // Arrange
    const drinks = [{ idDrink: 1, strDrink: 'cocktail', isLoading: false, showDetails: false },
    { idDrink: 1, strDrink: 'cocktail', isLoading: false, showDetails: false },
    { idDrink: 2, strDrink: 'cocktail', isLoading: false, showDetails: false }];
    component.offset = 0;
    component.drinks = [];
    component.isLoading = false;
    component.drinks$ = new BehaviorSubject<Drink[]>([]);
    // Act
    component.setItemsToDisplay(drinks, 0);

    // Assert
    expect(component.drinks$.getValue()).toEqual(drinks);
    expect(component.offset).toBe(3);
    expect(component.isLoading).toBeFalsy();
  });

});
