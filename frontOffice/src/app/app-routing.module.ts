import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog/blog.component';
import {BlogListComponent} from './blog/blog-list/blog-list.component';
import {AddBlogComponent} from './blog/add-blog/add-blog.component';

const routes: Routes = [
  {
    path: 'blogList',
    component: BlogListComponent,
    data: {
      title: 'Blogs',
    },
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    data: {
      title: 'blog',
    },
  },
  {
    path: 'addBlog',
    component: AddBlogComponent,
    data: {
      title: 'Add',
    },
  },
  {
    path: '**',
    redirectTo:  'blogList',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
