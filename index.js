// Sample JSON data
const products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Books",
        "price": 100
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Mouse",
        "price": 2000
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Charger",
        "price": 300
    }
];

let cart = [];
let total = 0;

// Function to render products
function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Function to add products to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    total += product.price;
    renderCart();
}

// Function to remove products from cart
function removeFromCart(index) {
    const product = cart[index];
    total -= product.price;
    cart.splice(index, 1);
    renderCart();
}

// Function to render cart
function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cart.forEach((product, index) =>{
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            ${product.name} - $${product.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartDiv.appendChild(cartItem);
    });

    document.getElementById('total').innerText = total;
}

// Initial rendering of products
renderProducts();
