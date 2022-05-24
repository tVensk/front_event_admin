import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {UsersComponent} from "./components/users/users.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {ModerationComponent} from "./components/moderation/moderation.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {EventDetailComponent} from "./components/event-detail/event-detail.component";
import {AuthGuard} from "./services/login-service/auth.guard";

const routes: Routes = [
  {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'index', component: MainScreenComponent, canActivate: [AuthGuard]},
  {path: 'stats', component: StatisticsComponent, canActivate: [AuthGuard]},
  {path: 'moderation', component: ModerationComponent, canActivate: [AuthGuard]},
  {path: 'users/details', component: UserDetailComponent, canActivate: [AuthGuard]},
  {path: 'events/details', component: EventDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
