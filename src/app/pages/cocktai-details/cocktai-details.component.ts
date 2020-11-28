import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/@data/models/drinks';

@Component({
  selector: 'app-cocktai-details',
  templateUrl: './cocktai-details.component.html',
  styleUrls: ['./cocktai-details.component.css']
})

export class CocktaiDetailsComponent implements OnInit {

  @Input() drink: Drink;
  constructor() { }

  ngOnInit() {
    this.drink = new Drink();
  }

}
