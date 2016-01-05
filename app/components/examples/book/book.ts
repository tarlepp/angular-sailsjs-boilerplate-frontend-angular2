// Angular2 specified stuff
import {Component} from 'angular2/core';
import {Headers} from 'angular2/http';

// 3rd party libraries
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

// Component setup
@Component({
  selector: 'book',
  templateUrl: './components/examples/book/book.html',
  providers: [AuthHttp]
})

// Actual component class
export class BookCmp {
  books: any[];

  private apiUrl = '<%= BACKEND_URL %>';

  constructor(
    private _authHttp: AuthHttp
  ) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this._authHttp.get(this.apiUrl + '/book?populate=author', {headers: headers})
      .subscribe(
        data => this.books = data.json(),
        err => console.log(err),
        () => console.log('Request Complete')
      );
  }
}
