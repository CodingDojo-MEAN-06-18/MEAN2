import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BookService } from '../../services';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  book: Book = new Book();
  sub: Subscription;

  @Output() newBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.book);

    this.sub = this.bookService.createBook(this.book).subscribe(
      book => {
        // this.newBook.emit(book);
        // this.book = new Book();
        // form.reset();
        // /team/33/user/11
        // this.router.navigate([])
        this.router.navigateByUrl('/');
      },
      error => {
        // handle errors
      }
    );

    // this.books.push(this.book);

    // console.log('our books ', this.books);
  }
}
