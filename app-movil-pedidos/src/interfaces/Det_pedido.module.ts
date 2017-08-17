/**
 * Created by MAYBETH on 12/8/2017.
 */
export class Det_pedido{
  id?:number;
  cant_det:number;
  st_Det:number;
  fkCab_det?:{
    id:number;
  };
  fk_Prod_de?:{
    id:number;
    tit:string;
    pre:number;
    tam:string;
  };

}
