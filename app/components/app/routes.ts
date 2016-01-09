// Route components
import {AboutCmp} from '../about/about';
import {LoginCmp} from '../login/login';
import {ExamplesCmp} from '../examples/examples';

export class Routes {
  static items = [
    {path: '/', component: AboutCmp},
    {path: '/about', component: AboutCmp, name: 'About'},
    {path: '/examples/...', component: ExamplesCmp, name: 'Examples'},
    {path: '/login', component: LoginCmp, name: 'Login'}
  ];

  static get(): any[] {
    return Routes.items;
  }
}
