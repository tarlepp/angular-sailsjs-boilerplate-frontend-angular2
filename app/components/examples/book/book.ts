// Angular2 specified stuff
import {Component, Injector, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ComponentInstruction, CanActivate, OnActivate} from 'angular2/router';

// 3rd party libraries
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';

// Component specified stuff
import {BookService} from './service';

// Component setup
@Component({
  selector: 'book',
  templateUrl: './components/examples/book/book.html'
})

/**
 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
 * if a component can be instantiated as part of a navigation.
 *
 * This will fetch all necessary books from API _before_ component is activated.
 *
 * @return Promise<boolean>|boolean
 */
@CanActivate((next) => {
  /**
   * Inject all necessary components so that 'BookService' is usable here.
   *
   * @type {Injector}
   */
  let injector = Injector.resolveAndCreate([
    HTTP_PROVIDERS, BookService, AuthHttp,
    provide(AuthConfig, {
      useFactory: () => {
        return new AuthConfig();
      }
    })
  ]);

  // And get BookService
  let bookService = injector.get(BookService);

  // And fetch books
  return bookService
    .getBooks()
    .then(
      data => {
        next.params.books = data;

        return true;
      }
    );
})

// Actual component class
export class BookCmp implements OnActivate {
  books: any[];

  /**
   * Function to run when router has been activated and first books are fetched from server.
   *
   * @param nextInstruction
   * @param prevInstruction
   */
  routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
    //noinspection TypeScriptUnresolvedVariable
    this.books = nextInstruction.params.books;
  }
}
