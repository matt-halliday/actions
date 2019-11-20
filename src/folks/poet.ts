import { loadJSON, rand, range, shuffle } from '../data';

const articulation = rand(7, 15);
const vocabulary = shuffle(loadJSON('poet.json'));
const inspiration = range(articulation, vocabulary.length);
const humanisation = () => {
    return rand(1, 6) > 4 ? '\n' : ' ';
};

export const speak = (): string => {
    return inspiration.map(idea => `${vocabulary[idea]}${humanisation()}`).join('').concat('\n ~ the poet');
};
