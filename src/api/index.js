import { create } from 'apisauce';
import { questionAdapter } from '../adapters/questions';

const API_BASE_URL = 'https://opentdb.com/';

const api = create({ baseURL: API_BASE_URL, timeout: 8000 });

export const getQuestions = async () => {
  const response = await api.get('api.php', {
    amount: 5,
    difficulty: 'easy',
    type: 'boolean',
  });

  return response.data.results.map(questionAdapter);
};
