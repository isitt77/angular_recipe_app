import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("meat", "seared", "url"),
    new Recipe("chicken", "fried", "url"),
    new Recipe("fish", "blackened", "url")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
