// Angular2 specified stuff
import {Component, Injector, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CanActivate, RouteData} from 'angular2/router';

// RxJS stuff
import 'rxjs/add/operator/toPromise';

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

  return new Promise((resolve, reject) => {
    let parameters = {
      limit: 20,
      sort: 'releaseDate DESC'
    };

    Promise.all([
      bookService.count().toPromise(),
      bookService.getBooks(parameters).toPromise()
    ]).then(
      data => {
        next.routeData.data = {
          count: data[0].count,
          books: data[1]
        };

        resolve(true);
      },
      error => reject(error)
    );
  });
})

// Actual component class
export class BookCmp {
  count: number;
  books: any[];

  constructor(routeData: RouteData) {
    this.count = routeData.get('count');
    this.books = routeData.get('books');
  }
}
