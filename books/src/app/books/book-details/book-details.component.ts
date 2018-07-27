import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

// import 'rxjs/add/operator/switchMap'

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.bookService.getBook(params.get('book_id')))
      )
      .subscribe(book => (this.book = book));
  }
}
