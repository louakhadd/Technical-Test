import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../service/blog.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Blog} from '../../model/Blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs;
  searchForm: FormGroup;

  constructor(private blogService: BlogService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getBlogs();
  }

  getBlogDetails(id) {
    this.router.navigate(['/blog', id]);
  }

  addBlog() {
    this.router.navigateByUrl('/addBlog');
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      author: [null, Validators.required],
      title: [null, Validators.required],
      content: [null, Validators.required],
    });
  }

  onSubmit() {
    const blog = new Blog();
    blog.author = this.searchForm.get('author').value;
    blog.title = this.searchForm.get('title').value;
    blog.content = this.searchForm.get('content').value;

    this.blogService.searchForBlog(blog).subscribe(data => {
      this.blogs = data;
    });
  }

  reset() {
    this.searchForm.reset();
    this.getBlogs();
  }

  getBlogs(){
    this.blogService.getblogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
