import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'portfolio-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  article: string | null = null;
  title: string | null = null;
  private destroy$ = new Subject();
  constructor(private blogService: BlogService, private applicationRef: ApplicationRef, private activatedRoute: ActivatedRoute) {
    requestAnimationFrame(() => this.applicationRef.tick());
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(({ id }) => {
      this.blogService.getArticle(id).subscribe(article => {
        this.article = article.body_html;
        this.title = article.title;
        requestAnimationFrame(() => this.applicationRef.tick());
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
