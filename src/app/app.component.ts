import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angbootstraptemplate';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('Blog Post - with Bootstrap Template');
    meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'});
    meta.updateTag({ name: 'description', content: 'A simple post with Angular and bootstrap'});
    meta.updateTag({ name: 'author', content: 'Haruna victor'}, );
  }
}
