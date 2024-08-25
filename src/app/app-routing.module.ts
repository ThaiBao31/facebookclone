import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';
import { MarketComponent } from './market/market.component';
import { GroupComponent } from './group/group.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'video', component: VideoComponent },
  { path:'market', component: MarketComponent},
  { path:'group', component: GroupComponent},
  { path:'game', component: GameComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
