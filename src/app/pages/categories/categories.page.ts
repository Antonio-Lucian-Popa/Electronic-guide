import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: any[] = [];

  constructor(private dbService: DatabaseService) {}

  async ngOnInit() {
    this.categories = await this.dbService.getCategories();
  }
}
