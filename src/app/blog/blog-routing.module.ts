import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '@portfolio/blog/list/list.component';
import { ArticleComponent } from '@portfolio/blog/article/article.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
