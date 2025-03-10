import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart=(id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>curProd.id!==id);


    localStorage.setItem('cartProductsLS',JSON.stringify(cartProducts));

    let removeDiv=document.querySelector(`#card${id}`);
    if(removeDiv){
        removeDiv.remove();

        showToast("delete",id);
    }
    updateCartValue(cartProducts);
};