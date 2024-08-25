import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { StoryComponent } from './story/story.component';
import { PostComponent } from './post/post.component';
import { StatusComponent } from './status/status.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { VideoComponent } from './video/video.component';
import { MarketComponent } from './market/market.component';
import { GroupComponent } from './group/group.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
    StoryComponent,
    PostComponent,
    StatusComponent,
    MainComponent,
    LoginComponent,
    ShowMoreComponent,
    VideoComponent,
    MarketComponent,
    GroupComponent,
    GameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
