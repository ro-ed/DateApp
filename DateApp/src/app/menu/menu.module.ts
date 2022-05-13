import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    
  ]
})
export class MenuModule { }
