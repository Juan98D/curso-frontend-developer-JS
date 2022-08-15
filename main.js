const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClosedIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDestokpMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClosedIcon.addEventListener('click', closedProductDetailAside);

function toggleDestokpMenu () {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closedProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {

        mobileMenu.classList.add('inactive')
        
    }

    if (!isProductDetailClosed ) {

        productDetailContainer.classList.add('inactive')
        
    }

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador Portátil HP',
    price: 2999000,
    img: 'https://www.ktronix.com/medias/196337755710-001-310Wx310H?context=bWFzdGVyfGltYWdlc3w0MTE0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaDEyLzExNzUyMDA0MzIxMzEwLmpwZ3wyNzg1NmU3NjhkYWQzYzQ4MmIyYzc2NjlhMzFiMDViZjc1NzczNzZkZGE0ZTQ2NTY2ZDQ1ZjMwM2YzNmQ3ZDAz',  
})
productList.push({
    name: 'Consola Sony Ps5',
    price: 3799900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/27495255_2?wid=240&hei=240&qlt=70'
})
productList.push({
    name: 'Consola Xbox Series S',
    price: 1599900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/9461744_2?wid=240&hei=240&qlt=70'
})
productList.push({
    name: 'Consola Nintendo Switch 1.1',
    price: 1699900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/4193205_2?wid=240&hei=240&qlt=70'
})
productList.push({
    name: 'Teclado Redragon USB',
    price: 239900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/31636602_2?wid=240&hei=240&qlt=70'
})
productList.push({
    name: 'Audifonos Headset',
    price: 384900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/24948965_2?wid=240&hei=240&qlt=70'
})
productList.push({
    name: 'Timos Logitech',
    price: 1499900,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/22278191_2?wid=240&hei=240&qlt=70'
})

function openProductDetailAside (){

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}


function closedProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}


function rederProduct(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

rederProduct(productList)