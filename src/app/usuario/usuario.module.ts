import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompartidoModule,
  ],
  providers:[
    UserService,
  ]
})
export class UsuarioModule { }
