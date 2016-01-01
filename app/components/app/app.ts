import {Component, ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {NavigationCmp} from '../navigation/navigation';
import {NameList} from '../../services/name_list';
import {RouteItem} from '../../services/route_item';

let routeItem = new RouteItem();

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavigationCmp]
})

@RouteConfig(routeItem.get())

export class AppCmp {}
