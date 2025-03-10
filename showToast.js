export function showToast(operation,id){

    const toast=document.createElement('div');
    toast.classList.add('toast');


    if(operation==="add"){
        toast.innerText=`Product with ${id} has been added to cart`;
    }
    else{
        toast.innerText=`Product with ${id} has been deleted from cart`;
    }
    

    document.body.appendChild(toast);


    setTimeout(()=>{
        toast.remove();
    },2000);
  

}