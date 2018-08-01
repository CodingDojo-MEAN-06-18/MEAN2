import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import * as fromBooks from './books';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },

  {
    path: 'books',
    // /books
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        // /books/new
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':book_id',
        component: fromBooks.BookDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
