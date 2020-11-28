export class Drink {
    idDrink: number;
    strDrink: string;
    strTags: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsDE: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strCreativeCommonsConfirmed: string;
    dateModifie: string;
    isLoading: boolean;
    showDetails: boolean;
}

export class CocktailsData {
    drinks: Drink[];

    constructor() {
        this.drinks = [];
    }
}
