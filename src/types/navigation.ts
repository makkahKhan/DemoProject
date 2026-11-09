import { Products, WishLists } from "./Interface";


export type RootStackParamList = {
    SignUp : undefined ;
    Login : undefined;
    Profile : undefined;
    WhishList : { wishlistItems : WishLists};
    Cart : undefined;
    Main : undefined;
    Addtocart : {product : Products};
   GetStarted : undefined;
}