import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchTabPage } from './match-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MatchTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchTabRoutingModule {}
