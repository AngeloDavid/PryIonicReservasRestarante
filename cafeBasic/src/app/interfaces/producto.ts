export interface Producto {
  id: number;
  tit_pro: string;
  des_pro: string;
  tam_pro: string;
  pre_pro: number;
  img_pro?: string;
  fkProd_cat: {
    des_cat:string;
  };
}
