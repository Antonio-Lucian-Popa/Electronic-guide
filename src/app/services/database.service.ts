import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db!: any;

  constructor() {}

  // Inițializează baza de date
  async initializeDatabase() {
    try {
      // Creează și obține conexiunea direct
      this.db = await CapacitorSQLite.createConnection({
        database: 'my_database',
        version: 1,
        encrypted: false,
        mode: 'no-encryption', // Sau 'encryption' dacă vrei criptare
      });

      if (this.db) {
        // Deschide conexiunea
        await this.db.open();
        console.log('Database initialized!');
      } else {
        console.error('Failed to create connection');
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }
  // Creează tabelele
  async createTables() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS calculators (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        formula TEXT NOT NULL,
        FOREIGN KEY(category_id) REFERENCES categories(id)
      );
    `;
    try {
      await this.db.execute(createTableQuery);
      console.log('Tables created successfully!');
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  // Populează baza de date
  async populateDatabase() {
    const insertCategories = `
      INSERT INTO categories (name) VALUES
      ('Electrical'), ('Mechanical'), ('Other');
    `;
    const insertCalculators = `
      INSERT INTO calculators (category_id, name, formula) VALUES
      (1, 'Ohm\'s Law', 'R = V / I'),
      (1, 'Power Calculation', 'P = V * I');
    `;
    try {
      await this.db.execute(insertCategories);
      await this.db.execute(insertCalculators);
      console.log('Database populated successfully!');
    } catch (error) {
      console.error('Error populating database:', error);
    }
  }

  // Obține date din baza de date
  async getCategories() {
    const query = 'SELECT * FROM categories;';
    try {
      const result = await this.db.query(query);
      return result.values || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
}
