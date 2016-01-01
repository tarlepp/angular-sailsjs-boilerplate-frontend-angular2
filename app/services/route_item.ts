import {AboutCmp} from '../components/about/about';

export class RouteItem {
  items = [
    {
      path: '/',
      redirectTo: '/about'
    },
    {
      path: '/about',
      component: AboutCmp,
      as: 'About',
      data: {
        access: 'anon',
        title: 'About'
      }
    },
    {
      path: '/examples',
      component: AboutCmp,
      as: 'Examples',
      data: {
        access: 'user',
        title: 'Examples'
      }
    },
    {
      path: '/admin',
      component: AboutCmp,
      as: 'Admin',
      data: {
        access: 'admin',
        title: 'Admin'
      }
    }
  ];

  get(): any[] {
    return this.items;
  }

  getNavigation(): any[] {
    return this.items.filter(item => {
      return item.hasOwnProperty('data') && item.data.hasOwnProperty('title');
    });
  }
}
