import {ghosts} from '../src/ghost/Ghosts';

test('There are 12 ghosts', () => {
  expect(ghosts().length).toBe(12);
});
