// Route components
import {AuthorCmp} from './author/author';
import {BookCmp} from './book/book';

export class Routes {
  static items = [
      {path: '/author', component: AuthorCmp, name: 'Author'},
      {path: '/book', component: BookCmp, name: 'Book'}
    ];

  static get(): any[] {
    return Routes.items;
  }
}
