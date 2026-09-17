import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ArticlesList } from './articles-list/articles-list'

@Component({
  imports: [RouterOutlet, ArticlesList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App { 
  protected readonly title = signal('articles-list');
}
