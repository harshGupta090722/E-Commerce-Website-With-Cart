import './style.css'
// import products from './api/products.json'

import { showProductContainer } from './homeProductsCards.js'
fetch("./api/products.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Use your JSON data here
  })
  .catch(error => console.error("Error loading JSON:", error));



//Define a function named 'showProductContainer' that takes an array of products as input.

showProductContainer(products);