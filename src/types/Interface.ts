
export interface category {
    key : string;
    image : any;
}

export interface Products {
    id : number,
    icon : string,
    title : string;
    category : string,
    image : any;
    price : number,    
}

export interface WishLists {
     id : number,
   title : string,
   category : string,
   image : any,
   price : number
}


export interface cartItems extends Products {
  quantity  : number,
}

export interface shopProp {
  products : Products[];
}