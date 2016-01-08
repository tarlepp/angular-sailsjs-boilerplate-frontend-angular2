// Angular2 specified stuff
import {Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

// RxJS stuff
import 'rxjs/add/operator/map';

// 3rd party libraries
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

@Injectable()
export class BookService {
  private apiUrl = '<%= BACKEND_URL %>';

  /**
   * Construction of the class.
   *
   * @param _authHttp
   */
  constructor(private _authHttp: AuthHttp) {}

  // TODO: move to common service
  private static getHeaders(): Headers {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return headers;
  }

  // TODO: move to common service
  private static parseParameters(parameters: Object): string {
    if (Object.keys(parameters).length === 0) {
      return '';
    } else {
      return '?' + BookService.serialize(parameters);
    }
  }

  // TODO: move to common service
  private static serialize(obj, prefix?) {
    let str = [];

    for(let p in obj) {

      if (obj.hasOwnProperty(p)) {
        let k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];

        str.push(typeof v === 'object'
          ? BookService.serialize(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }

    return str.join('&');
  }

  /**
   * Getter method for book count
   *
   * @param params
   * @returns {Observable<R>}
   */
  count({params = {}}: {params?: Object} = {}) {
    return this._authHttp
      .get(this.apiUrl + '/book/count' + BookService.parseParameters(params), {headers: BookService.getHeaders()})
      .map(res => res.json());
  }

  /**
   * Getter method for books data.
   *
   * @param params
   * @returns {Observable<R>}
   */
  getBooks(params?: Object) {
    return this._authHttp
      .get(this.apiUrl + '/book' + BookService.parseParameters(params), {headers: BookService.getHeaders()})
      .map(res => res.json());
  }
}
