import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileTabRoutingModule } from './profile-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfileTabRoutingModule
  ],
  declarations: [ProfileTabPage]
})
export class ProfileTabModule {}
