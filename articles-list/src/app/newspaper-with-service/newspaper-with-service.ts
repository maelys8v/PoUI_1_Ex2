import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Highlight } from '../directives/highlight'
import { ChangeDetectorRef } from '@angular/core'; // to correct the delay issue when publishing
import { NewspaperLocalService } from '../services/newspaper-local-service'
import { TextpipePipe } from '../pipes/textpipe-pipe';

@Component({
  imports: [CommonModule, FormsModule, Highlight, TextpipePipe],
  standalone: true,
  selector: 'newspaper-with-service',
  styleUrl: './newspaper-with-service.css',
  templateUrl: './newspaper-with-service.html',
})
export class NewspaperWithService{ //implements OnInit {

  article: Article = {
    title: "",
    subtitle: "",
    body: "",
    abstract: "",
    category: 'National',
    id: -1,
    show :null
  };

  articles: Article[] = []; // The list of articles -> add 3 hard ones in the constructor
  show: number;

  term: string;

  @ViewChild('articleForm') articleForm: any;

  constructor(private cdr: ChangeDetectorRef, private articleService : NewspaperLocalService) { // ChangeDetectorRef to correct the delay issue when publishing
    this.articles = articleService.getArticleList();  
    this.show = -1;     
    this.term = "";
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
    window.alert(`The article [${this.article.title}] has been published`);
    this.cdr.detectChanges(); // to correct the delay issue when publishing
    this.clear();
  }

  getArticleById(id:number): Article{
    let a : Article;
    a = this.articleService.getArticleById(id);
    window.alert(`Done`);
    return a;
  }



  // clear(): void {
  //   this.articleForm.reset();
  // }

  // clear(): void {
  //   this.articleForm.resetForm({ category: 'National' });
  //   this.cdr.detectChanges(); // to correct the delay issue when publishing
  // }

  clear(): void {
    this.articleForm.resetForm({
      aTitle: '',
      aSubtitle: '',
      aAbstract: '',
      aBody: '',
      category: 'National',
    });
    this.cdr.detectChanges();
  }

  // viewArticle(a:Article): void {
  //   a.show = 1;
  //   for(let i = 0; i<this.articles.length; i++){
  //     if(i != a.id){
  //       this.articles[i].show = null;
  //     }
  //   }

  // }

  viewArticle(a: Article): void {
  for (const x of this.articles) {
    x.show = x === a ? 1 : null;
  }
}
}


