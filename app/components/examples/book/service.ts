// Angular2 specified stuff
import {Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

// 3rd party libraries
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

@Injectable()
export class BookService {
  private apiUrl = '<%= BACKEND_URL %>';

  constructor(private _authHttp: AuthHttp) {}

  /**
   *
   * @returns {Promise|Promise<T>}
   */
  getBooks() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      this._authHttp.get(this.apiUrl + '/book?populate=author', {headers: headers})
        .subscribe(
          data => resolve(data.json()),
          err => reject(err),
          () => console.log('Request Complete')
        );
    });
  }
}
