import { rest } from 'msw';
import { testPersonCard } from '../utils/details';

export const handlers = [
  rest.get('https://swapi.dev/api/people/?search=', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ count: 1, next: 'next', previous: 'prev', results: [testPersonCard] }));
  }),
];
