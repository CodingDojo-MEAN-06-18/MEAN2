import { Component } from '@angular/core';

import { Book } from './models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  book: Book = new Book();
  books: Array<Book> = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.book);

    this.books.push(this.book);

    console.log('our books ', this.books);

    this.book = new Book();

    form.reset();
  }
}
