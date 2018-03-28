import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample2Component } from './sample2/sample2.component';

export const childRoutes: Routes = [{
  path: 'sample2widget',
  component: Sample2Component
},
{ path: '', redirectTo: 'sample2widget', pathMatch: 'full' },
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class Lib2RoutingModule { }
