import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { ContainerComponent } from './container/container.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagesidebarComponent } from './pagesidebar/pagesidebar.component';
import { PagefootComponent } from './pagefoot/pagefoot.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PortletComponent } from './component/portlet/portlet.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopComponent,
    LeftComponent,
    ContainerComponent,
    PageheaderComponent,
    PagesidebarComponent,
    PagefootComponent,
    DashboardComponent,
    PortletComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
