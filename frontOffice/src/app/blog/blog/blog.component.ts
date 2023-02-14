import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  idBlog;
  blog;
  blogs;
  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService) { }

  ngOnInit() {
    this.idBlog = this.activatedRoute.snapshot.params.id;

    this.blogService.getblog(this.idBlog).subscribe(data => {
      this.blog = data;
    });

    this.blogService.getblogs().subscribe(data => {
      this.blogs = data;
    });
  }

  voteForBlog(id, vote) {
    this.blogService.voteForTheBlog(id, vote).subscribe(data => {
      this.blog = data;
    });
  }
}
