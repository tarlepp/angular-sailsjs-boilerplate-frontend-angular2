// Angular2 specified stuff
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

// 3rd party libraries
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';

// And application itself
import {AppCmp} from './components/app/app';

// Bootstrap application
bootstrap(AppCmp, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(AuthConfig, {
    useFactory: () => {
      return new AuthConfig();
    }
  }),
  AuthHttp
]);
