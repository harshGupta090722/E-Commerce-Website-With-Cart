import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);
    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price=currentProdElem.querySelector(".productPrice").innerText;

    price=price.replace("₹","");
    
    let existingProduct=arrLocalStorageProduct.find((curProd)=> curProd.id===id);

    if(existingProduct && quantity>1){
        quantity=Number(existingProduct.quantity)+Number(quantity); 
        price=Number(price*quantity);
        let updatedCart={id,quantity,price};

        updatedCart=arrLocalStorageProduct.map((curProd)=> {
            return curProd.id===id? updatedCart:curProd;
        });

        console.log(updatedCart);

        localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));

        showToast("add",id);
        
    }

    if(existingProduct){
        return false;
    }
    
    price=Number(price*quantity);
    quantity=Number(quantity);

    let updateCart={id,quantity,price};

    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    showToast("add",id);
};