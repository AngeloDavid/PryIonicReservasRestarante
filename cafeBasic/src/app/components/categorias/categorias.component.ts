import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categ: Categoria[] = [];

  constructor(private _catService: CategoriaService) {
    this._catService.mostrarCateg().subscribe(
      resp => {
        this.categ = resp;
      }
    );
  }

  ngOnInit() {
  }

  eliminar(id: number, i: number) {
    this._catService.eliminarCateg(id).subscribe(
      resp => {
        console.log(id);
        console.log(i);
        this.categ.splice(i, 1);
      }
    );
  }


}
