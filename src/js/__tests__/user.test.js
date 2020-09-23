import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

test('level success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 10 });
  const level = getLevel(1);

  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
  expect(level).toBe('Ваш текущий уровень: 10');
});

test('level error', () => {
  fetchData.mockReturnValue({ status: 'error' });
  const level = getLevel(1);

  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
  expect(level).toBe('Информация об уровне временно недоступна');
});
