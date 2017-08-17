import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  id: string;
  opcion: string;

  categ: Categoria = {
  id: 0,
  des_cat: '',
  prods_cat: {}
  };

  constructor(private _catService: CategoriaService,
              private _router: Router,
              private _activated: ActivatedRoute) {
    console.log('sirvee');
    this._activated.params.subscribe(
      param => {
        this.id = param['id'];
        if (this.id !== 'nuevo') {
          this._catService.obtenerCateg(this.id).subscribe(
            result => {
              this.categ = result;
              console.log(result);
            }
          );
        }
      }
    );
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.categ);

   // if (this.opcion == 'nuevo') {
      this._catService.nuevaCateg(this.categ)
        .subscribe(
          resultado => {
            console.dir(resultado);
            this._router.navigate(['/admin', this.categ.id]);
          },
          error => {
            console.log(error);
          }
        );
  //  } else {
   /*   this._catService.editarCateg(this.categ, this.opcion)
        .subscribe(
          data => {
            this._router.navigate(['/categorias'])
          },
          error => {
            console.log(error);
          }
        ); */
  //  }

  }

  limpiar() {
    this.categ = {
      id: 0,
      des_cat: '',
      prods_cat: {}
    };
  }

}
