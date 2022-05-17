import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {UsersComponent} from "./components/users/users.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {ModerationComponent} from "./components/moderation/moderation.component";

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'index', component: MainScreenComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'moderation', component: ModerationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
