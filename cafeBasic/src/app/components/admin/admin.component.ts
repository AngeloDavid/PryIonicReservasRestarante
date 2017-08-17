import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import {CategoriaService} from '../../services/categoria.service';
import { Producto} from '../../interfaces/producto';
import { Categoria} from '../../interfaces/categoria';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  products: Producto[] = [];
  categories: Categoria[] = [];
  constructor(private prod_serv: ProductoService, private cat_serv: CategoriaService ) {
    this.prod_serv.consultarProdSails().subscribe(
      resultado => {
        this.products = resultado;
        console.log(this.products);
      }
    );
    this.cat_serv.consultarCat().subscribe(
      resp => {
        this.categories = resp;
        console.log(this.categories);
      }
    );
  }

  ngOnInit() {
  }

  eliminarProd(id: string, posicion: number) {
    this.prod_serv.eliminarProd(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.products.splice(posicion, 1);
        }
      );
  }

}
