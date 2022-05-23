import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {UsersComponent} from "./components/users/users.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {ModerationComponent} from "./components/moderation/moderation.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {EventDetailComponent} from "./components/event-detail/event-detail.component";

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'index', component: MainScreenComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'moderation', component: ModerationComponent},
  {path: 'users/details', component: UserDetailComponent},
  {path: 'events/details', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
