import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatTabPage } from './chat-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChatTabRoutingModule } from './chat-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ChatTabPage }]),
    ChatTabRoutingModule,
  ],
  declarations: [ChatTabPage]
})
export class ChatTabModule {}
