// Angular2 specified stuff
import {Component, Injector, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ComponentInstruction, CanActivate, OnActivate} from 'angular2/router';

// 3rd party libraries
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';

import {BookService} from './service';

// Component setup
@Component({
  selector: 'book',
  templateUrl: './components/examples/book/book.html',
  providers: [AuthHttp]
})

@CanActivate((next) => {
  var injector = Injector.resolveAndCreate([
    HTTP_PROVIDERS, BookService, AuthHttp,
    provide(AuthConfig, {
      useFactory: () => {
        return new AuthConfig();
      }
    })
  ]);

  var bookService = injector.get(BookService);

  return bookService.getBooks().then(
    data => {
      next.params.books = data;

      return true;
    }
  );
})

// Actual component class
export class BookCmp implements OnActivate {
  books: any[];

  routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
    this.books = nextInstruction.params.books;
  }
}
