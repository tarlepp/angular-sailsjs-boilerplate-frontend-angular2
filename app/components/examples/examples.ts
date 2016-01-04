// Angular2 specified stuff
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';

// 3rd party libraries
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// Component specified stuff
import {NavigationCmp} from './navigation';
import {Routes} from './routes';

// Component setup
@Component({
  selector: 'examples',
  templateUrl: './components/examples/examples.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavigationCmp]
})

// Specify component routes
@RouteConfig(Routes.get())

// This is protected component, so check that user has valid JWT
@CanActivate(() => tokenNotExpired())

// Actual component class
export class ExamplesCmp {}
