import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Highlight } from '../directives/highlight'

@Component({
  imports: [CommonModule, FormsModule, Highlight],
  standalone: true,
  selector: 'app-articles-list',
  styleUrl: './articles-list.css',
  templateUrl: './articles-list.html',
})
export class ArticlesList implements OnInit {

  article: Article = {
    title: "",
    subtitle: "",
    body: "",
    abstract: "",
    category: 'National'
  };
  @ViewChild('articleForm') articleForm: any;

  constructor() { }

  ngOnInit(): void {
    this.article = {
      title: "",
      subtitle: "",
      body: "",
      abstract: "",
      category: 'National'
    };
  }

  sendForm(): void {
    window.alert("Received information: " 
      + this.article.title + " " 
      + this.article.subtitle + " " 
      + this.article.body + " " 
      + this.article.abstract + " " 
      + this.article.category);
  }

  clear(): void {
    this.articleForm.reset();
  }
}










