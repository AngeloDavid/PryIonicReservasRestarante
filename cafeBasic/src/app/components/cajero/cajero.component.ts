import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit {

  pedido: any[] = [];
  constructor(private _ped: PedidoService) {
    this._ped.consultarPedido().subscribe(
      resp => {
        this.pedido = resp;
        console.log(this.pedido);
      }
    );
  }

  ngOnInit() {
  }

}
