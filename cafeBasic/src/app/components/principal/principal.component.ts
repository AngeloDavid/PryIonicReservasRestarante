import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { Producto} from '../../interfaces/producto';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css', './devices.css']
})
export class PrincipalComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private prod_serv: ProductoService ) {
    this.prod_serv.consultarProdSails().subscribe(
      resultado => {
        this.productos = resultado;
        for (let i = 0; i < this.productos.length; i++) {
          if (this.productos[i].img_pro == null) {
            this.productos[i].img_pro = 'https://i2.wp.com/umeepn.files.wordpress.com/2015/11/dulcini.jpg';
          }
        }

        console.log(this.productos);
      }
    );
  }

  ngOnInit() {
  }

}
