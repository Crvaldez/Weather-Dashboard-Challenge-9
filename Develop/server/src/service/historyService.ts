import fs from 'fs';
import path from 'path'
import { v4 as uuidv4 } from 'uuid';
// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

constructor(name: string) {
  this.id = uuidv4();
  this.name = name;
}

// TODO: Complete the HistoryService class
class HistoryService {
  private filePath: string;
  constructor() {
    this.filePath = path.join(process.cwd(), 'searchHistory.json');
  }

  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    try{
      const data = await fs.promises.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as City[];
    } catch (error) {
      if ((error; as NodeJS.ErrnoException).code === 'ENOENT') {
        return [];
    }
  }
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    try {
      const data = JSON.stringify(cities, null, 2);
      await fs.writeFile(this.filePath, data, 'utf-8');
    } catch (error) {
      console.error('Error writing search history:', error);
      throw error;
    }
  }
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
