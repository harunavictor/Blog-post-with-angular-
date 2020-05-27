import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BlogPostComponent } from './Components/blog-post/blog-post.component';
import { SearchWIdgetComponent } from './Components/search-widget/search-widget.component';
import { CategoryWidgetComponent } from './Components/category-widget/category-widget.component';
import { SideWidgetComponent } from './Components/side-widget/side-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BlogPostComponent,
    SearchWIdgetComponent,
    CategoryWidgetComponent,
    SideWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
