import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchTabPage } from './match-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MatchTabRoutingModule } from './match-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MatchTabRoutingModule
  ],
  declarations: [MatchTabPage]
})
export class MatchTabModule {}
