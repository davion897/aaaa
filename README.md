<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda en Línea</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="products">
            <h2>Productos</h2>
            <div class="product-grid">
                <div class="product">
                    <img src="https://via.placeholder.com/150" alt="Producto 1">
                    <button class="add-to-cart" onclick="addToCart('Producto 1', 'https://via.placeholder.com/150')">+</button>
                </div>
                <div class="product">
                    <img src="https://via.placeholder.com/150" alt="Producto 2">
                    <button class="add-to-cart" onclick="addToCart('Producto 2', 'https://via.placeholder.com/150')">+</button>
                </div>
                <!-- Agrega más productos según sea necesario -->
            </div>
        </div>
        <div class="cart">
            <h2>Carrito</h2>
            <div class="cart-items">
                <!-- Aquí se agregarán los productos -->
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
