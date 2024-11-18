import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private dbService: DatabaseService) {
    this.initializeApp();
  }

  async initializeApp() {
  //  await this.dbService.initializeDatabase();
    // await this.dbService.createTables();
    // await this.dbService.populateDatabase();
  }
}
