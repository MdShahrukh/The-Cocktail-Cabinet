import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { forkJoin } from 'rxjs';
import { FILTER_TYPES } from 'src/app/@data/app-contstants';

const ACTION_URLS = {
    getARandomCocktail: 'v1/1/random.php',

    getCatagoryFilterList: 'v1/1/list.php?c=list',
    getGlassFilterList: 'v1/1/list.php?g=list',
    getIngredientFilterList: 'v1/1/list.php?i=list',
    getAlchohalFilterList: 'v1/1/list.php?a=list',

    getCocktailByCatagory: 'v1/1/filter.php?c=',
    getCocktailByGlass: 'v1/1/filter.php?g=',
    getCocktailByAlchohal: 'v1/1/filter.php?a=',
    getCocktailByIngredient: 'v1/1/filter.php?i=',

    getCocktailById: 'v1/1/lookup.php?i=',

    searchcocktailByFirstLetter: 'v1/1/search.php?f=',
    searchcocktailByName: 'v1/1/search.php?s='
};

@Injectable({
    providedIn: 'root'
})

export class CocktailService {


    constructor(
        private apiService: ApiService
    ) { }

    getRandomCocktail() {
        return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getARandomCocktail);
    }

    getFiltersList() {
        const catagoryList = this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCatagoryFilterList);
        const glassList = this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getGlassFilterList);
        const ingredientList = this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getIngredientFilterList);
        const alchohalList = this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getAlchohalFilterList);
        return forkJoin([catagoryList, glassList, ingredientList, alchohalList]);
    }
    getfilteredCocktailList(filterType: string, value) {
        switch (filterType) {
            case FILTER_TYPES.catagory:
                return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCocktailByCatagory + value);

            case FILTER_TYPES.glass:
                return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCocktailByGlass + value);

            case FILTER_TYPES.ingredient:
                return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCocktailByIngredient + value);

            case FILTER_TYPES.alchohal:
                return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCocktailByAlchohal + value);
            case FILTER_TYPES.search:
                if (value.length === 1) {
                    return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.searchcocktailByFirstLetter + value);
                } else if (value.length > 1) {
                    return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.searchcocktailByName + value);
                }
        }
    }




    getCocktailById(id: number) {
        return this.apiService.getAction(environment.apiEndpoint + ACTION_URLS.getCocktailById + id);
    }

    searchCocktail(searchText: string) {

    }
}
