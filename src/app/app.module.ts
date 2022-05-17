import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {EventsComponent} from './components/events/events.component';
import {UsersComponent} from './components/users/users.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MainScreenComponent} from './components/main-screen/main-screen.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StatisticsComponent} from './components/statistics/statistics.component';
import {ModerationComponent} from './components/moderation/moderation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EventsComponent,
    UsersComponent,
    MainScreenComponent,
    StatisticsComponent,
    ModerationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
