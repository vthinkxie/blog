import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [ListComponent, ArticleComponent],
  imports: [CommonModule, BlogRoutingModule]
})
export class BlogModule {}
