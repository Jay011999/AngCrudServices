import { Component, Input } from '@angular/core';
import { ICategory } from '../Models/Icategory';
import { CategoryService } from '../services/category.service';
import { categoryComponentEnum } from '../Models/categoryComponentEnum';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent {
  @Input() category!: ICategory;
  constructor(private categoryService: CategoryService) {}
  onViewCategory() {
    this.categoryService.selectedCategory = this.category;
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.viewCategory
    );
  }
  onEditCategory() {
    this.categoryService.selectedCategory=this.category;
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.editCategory
    );
  }
}
