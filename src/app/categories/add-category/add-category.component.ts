import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../Models/Icategory';
import { categoryComponentEnum } from '../Models/categoryComponentEnum';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  title: string = '';
  description: string = '';
  constructor(private categoryService: CategoryService) {}

  onAddCategory() {
    let category: ICategory = {
      title: this.title,
      description: this.description,
    };
    this.categoryService.addCategory(category);
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.Categories
    );
  }
  onBack() {
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.Categories
    );
  }
}
