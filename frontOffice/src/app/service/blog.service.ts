import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from '../model/Blog';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = environment.urls.blog;

  constructor(private httpClient: HttpClient) { }

  public getblogs(): Observable<any>{
    return this.httpClient.get<Blog[]>(this.url + '/all');
  }

  public getblog(id): Observable<any>{
    return this.httpClient.get<Blog>(this.url + '?id=' + id);
  }

  public addblog(blog): Observable<any>{
    return this.httpClient.post<Blog>(this.url, blog);
  }

  public voteForTheBlog(id, vote): Observable<any>{
    return this.httpClient.post<Blog>(this.url + '/vote?id=' + id + '&vote=' + vote, null);
  }

  public searchForBlog(blog): Observable<any>{
    return this.httpClient.post<Blog>(this.url + '/search', blog);
  }
}
