import { Router, type Request, type Response } from 'express';
const router = Router();

 import HistoryService from '../../service/historyService.js';
 import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data-  completed
router.post('/', (req: Request, res: Response) => {
  try {
    const { city } = req.body;
    if (!city) {
     res.status(400).json({ error: 'City name is required' });
     return;
    }

  // TODO: GET weather data from city name - completed
  const weatherData = await WeatherService.getWeatherData(city);
  // TODO: save city to search history
  await HistoryService.saveCityToHistory(city);
    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'internal server error' });
  }
});

// TODO: GET search history -completed cities/
router.get('/history', async (_req, res) => { 
  try {
    const history = await HistoryService.getCities();
    res.status(200).json(history);
  } catch (error) {   
    console.error('Error fetching search history', error);
    res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
