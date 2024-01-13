import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { categoryComponentEnum } from '../Models/categoryComponentEnum';
import { ICategory } from '../Models/Icategory';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrl: './edit-component.component.css',
})
export class EditComponentComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  title: string = '';
  description: string = '';
  category: ICategory | null = null;
  ngOnInit(): void {
    this.category = this.categoryService.selectedCategory;
    if (this.category) {
      this.title = this.category.title;
      this.description = this.category.description;
    }
  }
  onBack() {
    this.categoryService.selectedComponentEvent.emit(
      categoryComponentEnum.Categories
    );
  }
  onUpdateCategory() {
    let category = {
      id: this.category?.id,
      title: this.title,
      description: this.description,
    };
    this.categoryService.editCategory(category);
    this.onBack();
  }
}
