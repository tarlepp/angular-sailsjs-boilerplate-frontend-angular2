import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RouteItem} from '../../services/route_item';

@Component({
  selector: 'header-component',
  templateUrl: './components/layout/header.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [RouteItem]
})

export class HeaderCmp {
  items: any[];

  constructor(
    private _routerItem: RouteItem,
    private _router: Router
  ) {
    this.items = _routerItem.getNavigation();
  }

  getRouterLink(item): string {
    return '/' + item.as;
  }

  isActive(item): boolean {
    let instruction = this._router.generate([this.getRouterLink(item)]);

    return this._router.isRouteActive(instruction);
  }
}
