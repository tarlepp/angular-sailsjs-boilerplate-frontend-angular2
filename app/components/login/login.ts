// Angular2 specified stuff
import {Component, Injectable} from 'angular2/core';
import {FormBuilder, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

// 3rd party libraries
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// Component setup
@Component({
  selector: 'login',
  templateUrl: './components/login/login.html',
  styleUrls: ['./components/login/login.css'],
  directives: [FORM_DIRECTIVES],
  providers: [FormBuilder]
})

@Injectable()
export class LoginCmp {
  form;
  loggedIn = tokenNotExpired();

  private apiUrl = '<%= BACKEND_URL %>';

  constructor(
    fb: FormBuilder,
    private _http: Http,
    private _router: Router
  ) {
    if (this.loggedIn) {
      this._router.navigate(['/Examples/Book']);
    }

    this.form = fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this._http
      .post(this.apiUrl + '/login', JSON.stringify(this.form.value), {headers: headers})
      .subscribe(
        response => {
          let data = response.json();

          localStorage.setItem('id_token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          this._router.navigate(['/Examples/Book']);
        },
        error => {
          console.log('error');
          console.log(error);
        }
      );
  }
}
