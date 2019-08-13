import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://en.wikipedia.org/wiki/Schnitzel#/media/File:Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      ingredients: ["French Fries", "Pork", "Salad."]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl:
        "https://en.wikipedia.org/wiki/Spaghetti#/media/File:Filipino_style_spaghetti.jpg",
      ingredients: ["Spaghetti", "Meat", "Tomatoes"]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
