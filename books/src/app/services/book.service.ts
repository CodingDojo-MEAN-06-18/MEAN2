import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BOOKS } from '../data/book-data';
import { Book } from '../models';

import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
    // return of(BOOKS);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    console.log('calling create book', book);
    return this.http.post<Book>(this.base, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
}
