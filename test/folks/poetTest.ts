import test from 'ava';
import { speak } from "../../src/folks/poet";

test('the poet should speak', t => {
    const poem = speak();
    t.is(typeof poem, 'string');
    t.true(poem.length > 10);
    t.log(poem)
});
