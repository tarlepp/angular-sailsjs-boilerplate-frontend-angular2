import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationCmp} from './navigation';

import {AuthorCmp} from './author/author';
import {BookCmp} from './book/book';

@Component({
  selector: 'examples',
  templateUrl: './components/examples/examples.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavigationCmp]
})

@RouteConfig([
  {path: '/author', component: AuthorCmp, name: 'Author'},
  {path: '/book', component: BookCmp, name: 'Book'}
])

export class ExamplesCmp {}
