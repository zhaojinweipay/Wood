import { PortletComponent } from './component/portlet/portlet.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const childrouts: Routes = [
    { path: '' , component : MainComponent}
];
export const routs: Routes = [
    { path: '' , component : HomeComponent } ,
    { path: 'dash' , component : DashboardComponent} ,
    { path: 'portler' , component : PortletComponent},
    { path : 'doit' , component : MainComponent , children : childrouts}

];

