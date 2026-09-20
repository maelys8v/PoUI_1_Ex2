import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Highlight } from '../directives/highlight'
import { ChangeDetectorRef } from '@angular/core'; // to correct the delay issue when publishing

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
    category: 'National'
  };

  articles: Article[] = []; // The list of articles -> add 3 hard ones in the constructor


  @ViewChild('articleForm') articleForm: any;

  constructor(private cdr: ChangeDetectorRef) { // ChangeDetectorRef to correct the delay issue when publishing
    this.articles = [
      { title: "First article title", subtitle: "First subtitle here", abstract: "Abstract of the first article", body: "body :)", category: 'National' },
      { title: "Second article title", subtitle: "Second subtitle here", abstract: "Abstract of the second article", body: "body /:", category: 'Sports' },
      { title: "Third article title", subtitle: "Third subtitle here", abstract: "Abstract of the third article", body: "body ;)", category: 'Economy' },
    ];
  }

  // ngOnInit(): void {
  //   this.article = {
  //     title: "",
  //     subtitle: "",
  //     body: "",
  //     abstract: "",
  //     category: 'National'
  //   };
  // }

  // sendForm(): void {
  //   window.alert("Received information: " 
  //     + this.article.title + " " 
  //     + this.article.subtitle + " " 
  //     + this.article.body + " " 
  //     + this.article.abstract + " " 
  //     + this.article.category);
  // }

  sendForm(): void {
    this.articles.push({ ...this.article });   // to push a COPY (otherwise when we reset it also resets inside the list)
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










