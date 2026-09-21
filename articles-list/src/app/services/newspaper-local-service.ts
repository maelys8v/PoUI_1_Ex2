import { Service } from '@angular/core';
import { Article } from '../interfaces/article';

@Service()
export class NewspaperLocalService {
    
    private articleList: Array<Article>;

    private idCount: number;
    

    constructor() { 
        this.articleList = [
            { title: ":) First article title", subtitle: "First subtitle here", abstract: "Abstract of the first article", body: "body :)", category: 'National', id : 0, show :null },
            { title: "Second article title", subtitle: "Second subtitle here", abstract: "Abstract of the second article", body: "body /:", category: 'Sports', id : 1, show :null },
            { title: "Third article title", subtitle: "Third subtitle here", abstract: "Abstract of the third article", body: "body ;)", category: 'Economy', id : 2, show :null },
        ];

        this.idCount = 3;
   }

   getArticleList(): Array<Article> {
    return this.articleList;
   }

   getArticleById(id:number): Article{
    return this.articleList[id];
  }


   getId(): number{
    this.idCount ++;
    return this.idCount -1;
   }

   addArticle(a : Article) : void{
    this.articleList.push({...a});
   }
}

