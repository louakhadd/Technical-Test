import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogComponent } from './blog/blog/blog.component';
import {HttpClientModule} from '@angular/common/http';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogComponent,
    AddBlogComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
