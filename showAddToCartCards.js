// import products from './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCartProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProductFromCart } from './removeProductFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

fetch("./api/products.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Use your JSON data here
  })
  .catch(error => console.error("Error loading JSON:", error));


let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{
    return cartProducts.some((curElem)=>curElem.id===curProd.id);
});

let cartElement=document.querySelector('#productCartContainer');
let templateContainer=document.querySelector('#productCartTemplate');

const showCartProduct=()=>{
    filterProducts.forEach((curProd)=>{

    const{category,id,image,name,stock,price}=curProd;
    
    let productClone=document.importNode(templateContainer.content,true);

    const lSActualData=fetchQuantityFromCartLS(id,price);

    productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
    productClone.querySelector('.category').textContent=category;
    productClone.querySelector('.productName').textContent=name;
    productClone.querySelector('.productImage').src=image;

    productClone.querySelector('.productQuantity').textContent=lSActualData.quantity;
    productClone.querySelector('.productPrice').textContent=lSActualData.price;


    productClone
       .querySelector('.stockElement')
       .addEventListener('click',(event)=>{
        incrementDecrement(event,id,stock,price)});
    
    productClone
        .querySelector('.remove-to-cart-button')
        .addEventListener('click',()=>
            removeProductFromCart(id)
    );


    cartElement.appendChild(productClone);
    });
};

showCartProduct();

updateCartProductTotal();