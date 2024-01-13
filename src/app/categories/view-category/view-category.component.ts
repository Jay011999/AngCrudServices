import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Models/Icategory';
import { CategoryService } from '../services/category.service';
import { categoryComponentEnum } from '../Models/categoryComponentEnum';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.css',
})
export class ViewCategoryComponent implements OnInit {
  category!: ICategory;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    if (this.categoryService.selectedCategory) {
      this.category = this.categoryService.selectedCategory;
    }
  }

  onBack() {
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.Categories
    );
  }
}
