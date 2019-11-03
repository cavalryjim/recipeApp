import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes = [];

  constructor( public http: HttpClient ) { }

  fetchRecipes() {
    console.log('fetching news');
    let url = "https://api.spoonacular.com/recipes/search?apiKey=bf94559755ec48dea6befd59d5ae30f4&number=20"
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.recipes = response['results'];
    }));
  }
  // https://api.spoonacular.com/recipes/search?apiKey=bf94559755ec48dea6befd59d5ae30f4&number=100
}
