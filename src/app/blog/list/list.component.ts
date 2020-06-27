import { ApplicationRef, Component, OnInit } from '@angular/core';
import { BlogService, Issue } from '@portfolio/blog/blog.service';

@Component({
  selector: 'portfolio-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listOfArticle: Issue[] = [];
  constructor(private blogService: BlogService, private applicationRef: ApplicationRef) {
    requestAnimationFrame(() => this.applicationRef.tick());
  }

  ngOnInit(): void {
    this.blogService.listArticles().subscribe(listOfArticle => {
      this.listOfArticle = listOfArticle;
      requestAnimationFrame(() => this.applicationRef.tick());
    });
  }
}
