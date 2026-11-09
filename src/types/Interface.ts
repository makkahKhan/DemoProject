
export interface category {
    key : string;
    image : any;
    name : string;
    slug : any
}

export interface Products {
    id : number,
    icon : string,
    title : string;
    category : string,
    thumbnail : any;
    price : number,    
}

export interface WishLists {
     id : number,
   title : string,
   category : string,
   thumbnail : any,
   price : number
}


export interface CartItems extends Products {
  quantity  : number,
}

export interface shopProp {
  products : Products[];
}