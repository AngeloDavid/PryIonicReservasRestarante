import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro-produc',
  templateUrl: './registro-produc.component.html',
  styleUrls: ['./registro-produc.component.css']
})
export class RegistroProducComponent implements OnInit {

  id: string;
  producto: Producto = {
    id: 0,
    tit_pro: '',
    des_pro: '',
    tam_pro: '',
    pre_pro: 0,
  }

  constructor(private _productoService: ProductoService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardarProducto(){
    console.log(this.producto);
    this._productoService.nuevoProducto(this.producto)
      .subscribe(
        resultado => {
          console.dir(resultado);
          this._router.navigate(['admin', this.producto.id]);
        },
        error => {
          console.log(error);
        }
      );
  }

}
