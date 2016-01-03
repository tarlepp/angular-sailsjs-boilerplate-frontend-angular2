import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthorCmp} from './author/author';
import {BookCmp} from './book/book';

@Component({
  selector: 'examples',
  templateUrl: './components/examples/examples.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: './', redirectTo: '/examples/author'},
  {path: '/author', component: AuthorCmp, name: 'Author'},
  {path: '/book', component: BookCmp, name: 'Book'}
])

export class ExamplesCmp {}
