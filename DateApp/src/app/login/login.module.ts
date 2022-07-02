import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LoginRoutingModule,
    MenuModule
  ]
})
export class LoginModule { }
