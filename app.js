class Product {
  //reserved method name, accepts any arguments. assign the argument to class field using this.
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>total: \$${0}</h2>
    <button>order</button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product=product
  }

  addToCart() {
    console.log(this.product.title)
    // console.log(this.product)
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartBtn = prodEl.querySelector('button');
    //binding product item object, can access product object on click. without, this.product would fail
    addCartBtn.addEventListener('click', this.addToCart.bind(this))
    return prodEl;
  }
}

class ProductList {
  products= [
    new Product(
      'pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'a soft pillow',
      19.99
    ),
    new Product(
      'carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'carpet data',
      89.99
    )
  ];

  constructor() {}

  render() {
    
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod)
      const prodEl = productItem.render();
      prodList.append(prodEl)
    }
    return prodList;
  }
};

class Shop {
  render() {
    const main = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    main.append(cartEl);
    main.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();

