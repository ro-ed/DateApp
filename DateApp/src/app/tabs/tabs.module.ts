import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { MenuModule } from '../menu/menu.module';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MenuModule
  ],
  declarations: [TabsPage, MenuComponent]
})
export class TabsPageModule {}
