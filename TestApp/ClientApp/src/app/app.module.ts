import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

const googleLoginOptions: LoginOpt = {
  scope: 'email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('client_id.apps.googleusercontent.com', googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('123123123')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
