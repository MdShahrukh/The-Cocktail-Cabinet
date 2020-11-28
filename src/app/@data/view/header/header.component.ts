import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from 'src/app/@core/Services/cocktail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue: string;
  catagoryList = [];
  glassList = [];
  ingredient = [];
  alchohalList = [];
  constructor(private cocktailService: CocktailService, private router: Router
  ) {

  }

  ngOnInit(): void {
    this.cocktailService.getFiltersList().subscribe((data: any) => {
      data[0].drinks.map(c => this.catagoryList.push(c.strCategory));
      data[1].drinks.map(c => this.glassList.push(c.strGlass));
      data[2].drinks.map(c => this.ingredient.push(c.strIngredient1));
      data[3].drinks.map(c => this.alchohalList.push(c.strAlcoholic));
    });
  }

  searchCocktail(value) {
    if (value && value.search !== '') {
      this.router.navigate(['./cocktail-list'], { queryParams: { filterType: 'search', value: value.search } });
    }
  }
}
