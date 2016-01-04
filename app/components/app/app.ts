// Angular2 specified stuff
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

// Component specified stuff
import {HeaderCmp, FooterCmp} from '../layout/layout';
import {NameList} from '../../services/name_list';
import {Routes} from './routes';

// Component setup
@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, HeaderCmp, FooterCmp]
})

// Specify component routes
@RouteConfig(Routes.get())

// Actual component class
export class AppCmp {}
