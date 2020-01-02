import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }


  ngOnInit() {
    this._route.params.subscribe(params =>{
      let searchString = params['search'];
      this.search = searchString;
      this._articleService.search(searchString).subscribe(
        response =>{
          if(response.articles){
            this.articles = response.articles;
          }else{
            this.articles = [];
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );
    });
  }

}
