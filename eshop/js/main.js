let cart = [];  // 儲存購物車商品
let total = 0;  // 總金額

// 加入購物車功能
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

// 更新購物車顯示
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // 清空現有內容
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} 元`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

// 顯示商品詳情彈窗
function showProductDetail(name, description) {
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('productModal').style.display = 'block';
}

// 關閉彈窗
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}