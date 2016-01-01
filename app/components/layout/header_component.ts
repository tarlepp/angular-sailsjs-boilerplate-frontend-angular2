import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RouteItem} from '../../services/route_item';

@Component({
  selector: 'header-component',
  templateUrl: './components/layout/header.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [RouteItem]
})

export class HeaderCmp {
  constructor(
    public items: RouteItem,
    private _router: Router
  ) {}

  getRouterLink(item): string {
    return '/' + item.as;
  }

  isActive(item): boolean {
    let instruction = this._router.generate([this.getRouterLink(item)]);

    return this._router.isRouteActive(instruction);
  }
}
