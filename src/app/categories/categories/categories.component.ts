import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../Models/Icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories!: ICategory[];
  ngOnInit(): void {
    this.categories = this.categoryService.categories;
  }
}
