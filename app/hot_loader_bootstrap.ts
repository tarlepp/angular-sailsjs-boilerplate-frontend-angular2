/// <reference path="../tools/typings/tsd/systemjs/systemjs.d.ts"/>

// Angular2 specified stuff
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

// 3rd party libraries
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';

// And application itself
import {AppCmp} from './components/app/app';

// Used custom providers
let customProviders = [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,
  AuthHttp,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(AuthConfig, {
    useFactory: () => {
      return new AuthConfig();
    }
  })
];

// Bootstrap hot-loader
System.import('//localhost:<%= HOT_LOADER_PORT %>/ng2-hot-loader')
  .then(
    loader => {
      //noinspection TypeScriptUnresolvedFunction
      loader.ng2HotLoaderBootstrap(AppCmp, customProviders);
    },
    error => {
      console.log('Could not initialize ng2-hot-loader - fallback to normal init.', error);

      // Bootstrap application
      bootstrap(AppCmp, customProviders);
    }
  );
