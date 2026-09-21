import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Highlight } from '../directives/highlight'
import { ChangeDetectorRef } from '@angular/core'; // to correct the delay issue when publishing
import { NewspaperLocalService } from '../services/newspaper-local-service'

@Component({
  imports: [CommonModule, FormsModule, Highlight],
  standalone: true,
  selector: 'app-articles-list',
  styleUrl: './articles-list.css',
  templateUrl: './articles-list.html',
})
export class ArticlesList{ //implements OnInit {

  article: Article = {
    title: "",
    subtitle: "",
    body: "",
    abstract: "",
    category: 'National',
    id: -1
  };

  articles: Article[] = []; // The list of articles -> add 3 hard ones in the constructor


  @ViewChild('articleForm') articleForm: any;

  constructor(private cdr: ChangeDetectorRef, private articleService : NewspaperLocalService) { // ChangeDetectorRef to correct the delay issue when publishing
    this.articles = articleService.getArticleList();       
  }

  
  // sendForm(): void {
  //   this.articles.push({ ...this.article });   // to push a COPY (otherwise when we reset it also resets inside the list)
  //   this.cdr.detectChanges(); // to correct the delay issue when publishing
  //   window.alert(`The article [${this.article.title}] has been published`);
  //   this.clear();
  // }



  addArticle():void{//title: string, subtitle: string, body: string, abstract: string, category: 'National' | 'International' | 'Sports' | 'Economy', id: number): void {
    // this.article.title = title;
    // this.article.subtitle = subtitle;
    // this.article.body = body;
    // this.article.abstract = abstract;
    // this.article.category = category;
    this.article.id = this.articleService.getId();

    this.articleService.addArticle(this.article)
    this.cdr.detectChanges(); // to correct the delay issue when publishing
    window.alert(`The article [${this.article.title}] has been published`);
    this.clear();
  }



  // clear(): void {
  //   this.articleForm.reset();
  // }

  clear(): void {
    this.articleForm.resetForm({ category: 'National' });
  }
}










