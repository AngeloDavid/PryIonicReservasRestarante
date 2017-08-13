/**
 * Created by MAYBETH on 12/8/2017.
 */
export class Producto{
  id:number;
  tit_pro:string;
  des_pro:string;
  tam_pro:string;
  pre_pro:number;
  img_pro?:string;
  fkPro_cat:{
    id:number;
  };
  pro_det:{}
}
