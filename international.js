
//Hamburger menu
//
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
     nav.classList.add('active');  
    })
}

if(close) {
    close.addEventListener('click', () => {
     nav.classList.remove('active');  
    })
}

//feature product slider
// trouble: right arrow to appear for styls css needed to change position to relative
const procontainer = [...document.querySelectorAll('.pro-container')];
//document.querySelectorAll method: selects all elements with the class name of "pro-container" on pg
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];//same for buttons
const preBtn = [...document.querySelectorAll('.pre-btn')];
// trouble connecting because I mislabled pro-container, had it as pro container
 procontainer.forEach((item, i) => { //forEach method: iterate over each item in the procontainer array. 
    let containerDimensions = item.getBoundingClientRect();//code calculates the width of the item's bounding rectangle
    let containerWidth = containerDimensions.width;//getBoundingClientRect() method) assigns to a variable named containerWidth.

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })// had nxtBtn snd i reversed

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//Products JS//

// Fetch the JSON file
// fetch('products.json')
// .then(response => response.json())
// .then(products => {
//   // Get the product list container
//   const productList = document.getElementById('product-list');
//   // Loop through the products and create list items for each one
//   products.forEach(product => {
//     const listItem = document.createElement('li');
//     const image = document.createElement('product');
//     image.src = product.image;
//     const title = document.createElement('img');
//     title.textContent = product.title;
//     const description = document.createElement('h4');
//     description.textContent = product.description;
//     const price = document.createElement('description');
//     price.textContent = `$${product.price.toFixed(2)}`;
//     // Append the product information to the list item
//     listItem.appendChild(image);
//     listItem.appendChild(title);
//     listItem.appendChild(description);
//     listItem.appendChild(price);
//     // Append the list item to the product list container
//     productList.appendChild(listItem);
//   });
// })
// .catch(error => {
//   console.error('Error fetching products:', error);
// });

fetch('products.json')// trouble linking to json, forgot to include this code
    .then(response => response.json())
    .then(products => {
        // Get the product list container
        const productList = document.getElementById('product-list');

        // Loop through the products and create list items for each one
        products.forEach(product => {
            // Create the list item element
            const listItem = document.createElement('li');
            listItem.classList.add('product');


            // Create the image element
            const image = document.createElement('img');
            image.src = product.image;

            // Create the title element
            const title = document.createElement('h4');
            title.textContent = product.title;
            title.classList.add('description');

            // Create the description element
            const description = document.createElement('h5');
            description.textContent = product.description;
            description.classList.add('description');



            // Create the price element
            const price = document.createElement('h4');
            price.textContent = `$${product.price.toFixed(2)}`;

            //Create the cart button element
            const cartButton = document.createElement('cartButton');
            cartButton.textContent = 'Add to Cart';
            cartButton.classList.add('cart');



            // Append all the elements to the list item
            listItem.appendChild(image);
            listItem.appendChild(title);
            listItem.appendChild(description);
            listItem.appendChild(price);
            listItem.appendChild(cartButton);
           

            // Append the list item to the product list container
            productList.appendChild(listItem);
            listItem.appendChild(title);
            listItem.appendChild(description);
            listItem.appendChild(price);
            listItem.appendChild(cartButton);
           
            
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
