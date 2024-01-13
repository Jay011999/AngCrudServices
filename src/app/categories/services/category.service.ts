import { EventEmitter, Injectable, Output } from '@angular/core';
import { ICategory } from '../Models/Icategory';
import { categoryComponentEnum } from '../Models/categoryComponentEnum';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}
  @Output() selectedComponentEvent = new EventEmitter<categoryComponentEnum>();
  categories: ICategory[] = [
    { id: 1, title: 'Category 1', description: 'Category description 1' },
  ];

  addCategory(category: ICategory) {
    if (!category.id) category.id = this.categories.length + 1;
    this.categories.push(category);
  }

  editCategory() {}

  getCategories() {}

  getCategoryById() {}

  deleteCategory() {}
}
