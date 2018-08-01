import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Book } from '../../models/book';

import { TitleizePipe } from '../../titleize.pipe';
import { BookService } from '../../services/';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
  // I briefly and awkwardly mentioned change detection
  // Change Detection is how Angular determines if an object has changed.
  // There are currently two strategies available, Default and OnPush
  // You can modify your chosen strategy here:

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [];
  books$: Observable<Book[]>;
  selectedBook: Book;
  errorMessage: string;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // console.log(this.bookService);

    this.books$ = this.bookService.getBooks().pipe(
      tap(books => {
        books.forEach(book => {
          // console.log('booking ', this.titleize);

          book.author = this.titleize.transform(book.author);
        });
      })
    );
    // this.bookService.getBooks().subscribe(books => {
    //   console.log('got books?', books);
    //   this.books = books;
    //   this.books.forEach(book => {
    //     // console.log('booking ', this.titleize);

    //     book.author = this.titleize.transform(book.author);
    //   });
    // });

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

  onDelete(id: string) {
    console.log('calling on delete', id);

    this.bookService.deleteBook(id).subscribe(
      updatedBook => {
        console.log('things are happening ', id);
        // this.books = [...this.books.filter(book => book.id !== id), updatedBook];

        this.books = this.books.filter(book => book._id !== id);
      },
      error => {
        console.log('error', error);

        this.errorMessage = error.statusText;
      }
    );
  }

  onEvent(event: Event) {
    console.log('canceling');
    event.stopPropagation();
  }
}
