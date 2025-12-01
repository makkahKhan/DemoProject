import { Products } from "./Interface";


export type RootStackParamList = {
    SignUp : undefined ;
    Login : undefined;
    Profile : undefined;
    WhishList : undefined;
    Cart : undefined;
    Main : undefined;
    Addtocart : {product : Products};
}