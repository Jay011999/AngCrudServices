import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { SingleCategoryComponent } from './categories/single-category/single-category.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ViewCategoryComponent } from './categories/view-category/view-category.component';
import { EditComponentComponent } from './categories/edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
