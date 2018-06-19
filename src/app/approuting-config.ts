import { PortletComponent } from './component/portlet/portlet.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';

import {  Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const childrouts: Routes = [
    { path: '' , component : MainComponent}
];
export const routs: Routes = [
    { path: '' , component : HomeComponent } ,
    { path: 'Dash' , component : DashboardComponent} ,
    { path: 'Portler' , component : PortletComponent},
    { path : 'Doit' , component : MainComponent , children : childrouts}

];

