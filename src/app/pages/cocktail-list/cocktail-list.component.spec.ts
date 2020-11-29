import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';

import { CocktailListComponent } from './cocktail-list.component';

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {}, queryParams: {} }
  } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
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
});
