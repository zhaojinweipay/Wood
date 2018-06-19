import { routs } from './approuting-config';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routs)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
