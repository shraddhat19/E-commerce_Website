
    
    function updateCartCount() {
        const cartCount = localStorage.getItem('cartCount') || 0;
        document.getElementById('cart-count').innerText = cartCount;
    }

    document.querySelector('.add-to-cart').addEventListener('click', function() {
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartCount();
        alert('Added to cart!');
    });

    
    document.addEventListener('DOMContentLoaded', function() {
        updateCartCount();
    });

