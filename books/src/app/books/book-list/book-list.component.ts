import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';
import { BOOKS } from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;
  selectedBook: Book;

  constructor(private titleize: TitleizePipe) {}

  ngOnInit() {
    this.books.forEach(book => {
      // console.log('booking ', this.titleize);

      book.author = this.titleize.transform(book.author);
    });

    // this.books.forEach(function(book) {
    //   console.log('booking ', this);
    // });
  }

  onSelect(book: Book) {
    console.log('selecting ', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // add more here
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }
}
