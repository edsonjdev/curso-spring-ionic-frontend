import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfirnationPage } from './order-confirnation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrderConfirnationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirnationPage),
  ],
  providers: [
    PedidoService
  ]
})
export class OrderConfirnationPageModule {}
