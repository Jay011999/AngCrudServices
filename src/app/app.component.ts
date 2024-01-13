import { Component, OnInit } from '@angular/core';
import { categoryComponentEnum } from './categories/Models/categoryComponentEnum';
import { CategoryService } from './categories/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'AngCrudServices';
  selectedComponent = categoryComponentEnum.Categories;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.selectedComponentEvent.subscribe(
      (data) => (this.selectedComponent = data)
    );
  }

  onAddCategory() {
    this.selectedComponent = categoryComponentEnum.addCategory;
  }
}
