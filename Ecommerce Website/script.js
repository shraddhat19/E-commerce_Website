let cart = [];
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = box.getAttribute('data-id');
            const productName = box.getAttribute('data-name');
            const productPrice = parseFloat(box.getAttribute('data-price'));

            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
            event.preventDefault(); // Prevent the default action of anchor
        }
    });
});

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

cartButton.addEventListener('click', () => {
    alert(`Cart has ${cart.length} items!`); // Placeholder for cart interaction
});
