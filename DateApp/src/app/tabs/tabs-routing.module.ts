import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, 
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile-tab/profile-tab.module').then(m => m.ProfileTabModule)
      },
      {
        path: 'match',
        loadChildren: () => import('../match-tab/match-tab.module').then(m => m.MatchTabModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat-tab/chat-tab.module').then(m => m.ChatTabModule)
      },
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
