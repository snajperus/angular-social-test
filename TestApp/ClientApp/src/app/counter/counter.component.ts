import { Component } from '@angular/core';
import { AuthService, LoginOpt, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor (private authService: AuthService) { }

  googleLoginOptions: LoginOpt = {
    scope: 'email',
    client_id: 'CLIENT_ID.apps.googleusercontent.com'
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

  signInWithGoogle(): void {
    this.authService.authState.subscribe(
      resp => {
        // console.log(resp.name);
        console.log('test 1');
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions);
      },
      err => {
        console.log('test 2');
        console.log(err);
      });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
