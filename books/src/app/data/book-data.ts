import { Book } from '../models/book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert heinlein',
    publisher: "G. P. Punam's Sons",
    year: 1961,
    pages: 408,
  },
  {
    id: randomId(),
    title: 'where the red fern grows',
    author: 'wilson rawls',
    publisher: 'Doubleday',
    year: 1961,
    pages: 245,
  },
  {
    id: randomId(),
    title: 'a fire upon the deep',
    author: 'vernor vinge',
    publisher: 'Tor Books',
    year: 1992,
    pages: 391,
  },
  {
    id: randomId(),
    title: 'a game of thrones',
    author: 'george r. r. martin',
    publisher: 'Bantam Spectra',
    year: 1996,
    pages: 694,
  },
  {
    id: randomId(),
    title: 'leviathan wakes',
    author: 'james s. a. corey',
    publisher: 'Orbit Books',
    year: 2011,
    pages: 582,
  },
  {
    id: randomId(),
    title: 'foundation',
    author: 'isaac asimov',
    year: 1951,
    pages: 255,
    publisher: 'Gnome Press',
  },
  {
    id: randomId(),
    title: 'slaughterhouse-five',
    author: 'kurt vonnegut',
    year: 1969,
    pages: 190,
    publisher: 'Delacorte Press',
  },
];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
