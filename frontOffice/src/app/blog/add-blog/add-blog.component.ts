import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BlogService} from '../../service/blog.service';
import {Blog} from '../../model/Blog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  articleForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.formBuilder.group({
      author: [null, Validators.required],
      title: [null, Validators.required],
      content: [null, Validators.required],
    });
  }
  onSubmit() {
    if (this.articleForm.invalid) {
      return;
    }
    const blog = new Blog();
    blog.author = this.articleForm.get('author').value;
    blog.title = this.articleForm.get('title').value;
    blog.content = this.articleForm.get('content').value;
    this.blogService.addblog(blog).subscribe(data => {
      this.router.navigateByUrl('/blogList');
    });
  }

}
