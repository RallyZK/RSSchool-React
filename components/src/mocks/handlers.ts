import { rest } from 'msw';
import { testPersonCard } from '../utils/details';

export const handlers = [
  rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
    const users = { count: 1, next: 'next', previous: 'prev', results: [testPersonCard] };
    return res(ctx.status(200), ctx.json(users));
  }),
];
