import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { Categoria } from '../../interfaces/categoria';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService} from '../../services/categoria.service';
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
    fkProd_cat: {
      des_cat: '',
    }
  };
  categories: Categoria[]= [];
  constructor(private _productoService: ProductoService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute, private _catService: CategoriaService) {

    console.log('dasdashjdasd');
    this._catService.consultarCat().subscribe(
      resp => {
        this.categories = resp;
        console.log('desde const registr prod.ts');
        console.log(this.categories);
        console.log(this.categories[0].id);
      });

    this._activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
        if (this.id !== 'nuevo') {
          this._productoService.getProd(this.id).subscribe(
            resultado => {
              this.producto = resultado;
              console.log(this.producto);
            }
          );
        }
      });
  }

  ngOnInit() {

  }

  guardarProducto() {
    console.log("hola guardar");
    console.log(this.producto);
    if (this.id === 'nuevo') {
      this._productoService.nuevoProducto(this.producto)
        .subscribe(
          resultado => {
            console.dir(resultado);
            this._router.navigate(['/registroproducto', resultado.id]);
          });
    }else {
      this._productoService.editarProd(this.producto, this.id).subscribe(
        resultado => {
          this._router.navigate(['/admin']);
        });
    }
  }

  limpiar(){
    this.producto = {
      id: 0,
      tit_pro: '',
      des_pro: '',
      tam_pro: '',
      pre_pro: 0,
      fkProd_cat: {
        des_cat: '',
      }
    };
  }



}
