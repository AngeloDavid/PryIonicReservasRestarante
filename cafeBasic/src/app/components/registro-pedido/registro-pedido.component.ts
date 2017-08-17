import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../interfaces/pedido';
import { PedidoService } from '../../services/pedido.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro-pedido',
  templateUrl: './registro-pedido.component.html',
  styleUrls: ['./registro-pedido.component.css']
})
export class RegistroPedidoComponent implements OnInit {

  id: string;
  pedido: Pedido = {
    id: 0,
    cant_det: 0,
    st_det: 0,
    est_det: true,
  };

  constructor(private _pedidoService: PedidoService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.pedido);
    this._pedidoService.nuevoPedido(this.pedido)
      .subscribe(
        resultado => {
          console.dir(resultado);
          this._router.navigate(['/cajero', this.pedido.id]);
        },
        error => {
          console.log(error);
        }
      );
  }

  limpiar(){
    this.pedido = {
      id: 0,
      cant_det: 0,
      st_det: 0,
      est_det: true,
    };
  }

}
