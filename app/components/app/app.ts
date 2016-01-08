// Angular2 specified stuff
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Component specified stuff
import {HeaderCmp, FooterCmp} from '../layout/layout';
import {Routes} from './routes';

// Component setup
@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, HeaderCmp, FooterCmp]
})

// Specify component routes
@RouteConfig(Routes.get())

// Actual component class
export class AppCmp {}
