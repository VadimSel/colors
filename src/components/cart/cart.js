import './cart.css'

let cartItemsData = [];

const {
	cart,
	renderCartContentItems,
} = {
	cart: document.getElementById("cart"),
	renderCartContentItems: document.getElementById("cartContentItems"),
};

export function renderCart (mainSection, modalBackground) {
  document.getElementById("openCart").addEventListener("click", () => {
    [cart, modalBackground].forEach((el) => {
      el.classList.add("open");
    });
  });
  
  document.getElementById("openCartMobile").addEventListener("click", () => {
    cart.classList.add("openMobile");
    modalBackground.classList.add("open");
    document.documentElement.style.overflow = "hidden";
  });
  
  document.getElementById("closeCartButton").addEventListener("click", () => {
    [cart, modalBackground].forEach((el) => {
      el.classList.remove("open", "openMobile");
    });
    document.documentElement.style.overflow = "auto";
  });

  function cartFunction() {
    totalCardItemsQuantity();
    totalCartAmount();
  
    renderCartContentItems.innerHTML = cartItemsData
      .map((item) => {
        const isMinusDisabled = item.quantity == 1 && "disabled";
        return `<li class="cartItem" data-id="${item.id}">
          <img class="cartItemImage" src="${item.image}" alt="item" />
          <div class="cartItemInfo">
            <p class="cartItemName">${item.name}</p>
            <p class="cartItemPrice">${item.price}</p>
          </div>
          <div class="cartItemCount">
            <button class="cartItemCountMinus ${isMinusDisabled}">
              <img src="assets/img/minus.svg" alt="minus" />
            </button>
            <p class="cartItemCountQuantity">${item.quantity}</p>
            <button class="cartItemCountPlus">
              <img src="assets/img/plus.svg" alt="plus" />
            </button>
          </div>
          <button class="cartItemDelete">
            <img src="assets/img/x.svg" alt="delete" />
          </button>
        </li>`;
      })
      .join("");
  }
  
  renderCartContentItems.addEventListener("click", (event) => {
    const cartItemDelete = event.target.closest(".cartItemDelete");
    const cartProductId = event.target.closest(".cartItem").dataset.id;
  
    if (event.target.closest(".cartItemCountMinus")) {
      updateProductQuantity(cartProductId, -1);
    } else if (event.target.closest(".cartItemCountPlus")) {
      updateProductQuantity(cartProductId, +1);
    } else if (cartItemDelete) {
      const findedIndex = cartItemsData.findIndex((item) => item.id === cartProductId);
      if (cartItemDelete && findedIndex !== -1) {
        cartItemsData.splice(findedIndex, 1);
      }
    }
    cartFunction();
  });
  
  function updateProductQuantity(productId, amount) {
    const existingProduct = cartItemsData.find((item) => item.id === productId);
  
    if (existingProduct) {
      const newQuantity = parseInt(existingProduct.quantity) + parseInt(amount);
      if (newQuantity > 0) {
        existingProduct.quantity = newQuantity.toString();
      } else {
        existingProduct.quantity = "1";
      }
    }
  }
  
  mainSection.addEventListener("click", (event) => {
    const button = event.target.closest(".addProduct");
  
    if (button) {
      const productCard = button.closest(".productCart");
      const productId = productCard.dataset.id;
      const productQuantity = parseInt(productCard.dataset.quantity);
      const productName = productCard.querySelector(".productName").textContent;
      const productPrice = productCard.querySelector(".productPrice").textContent;
      const productImage = productCard.querySelector(".productImage").src;
  
      const existingProduct = cartItemsData.find((item) => item.id === productId);
  
      if (existingProduct) {
        updateProductQuantity(productId, productQuantity);
      } else {
        const selectedProduct = {
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: productQuantity.toString(),
        };
        cartItemsData.push(selectedProduct);
      }
      cartFunction();
    }
  });
  
  document.getElementById("itemsCountDelete").addEventListener("click", () => {
    cartItemsData = [];
    cartFunction();
  });
  
  function totalCardItemsQuantity() {
    const totalQuantity = cartItemsData.reduce(
      (total, item) => parseInt(total) + parseInt(item.quantity),
      0
    );
  
    const quantityText = (quantity) => {
      const lastDigit = quantity % 10;
      if (lastDigit === 1 && quantity !== 11) {
        return `${quantity} товар`;
      } else if (lastDigit >= 2 && lastDigit <= 4 && (quantity < 10 || quantity > 20)) {
        return `${quantity} товара`;
      } else {
        return `${quantity} товаров`;
      }
    };
  
    document.getElementById("itemsCount").innerText = quantityText(totalQuantity);
    document.getElementById("openCart").innerText = totalQuantity;
    document.getElementById("openCartMobile").innerText = totalQuantity;
  }
  
  function totalCartAmount() {
    const totalAmount = cartItemsData.reduce(
      (total, item) => total + parseFloat(item.price) * parseInt(item.quantity),
      0
    );
    const formattedTotalAmount = new Intl.NumberFormat("ru-RU").format(totalAmount);
    document.getElementById("cartTotalPrice").innerText = `${formattedTotalAmount} ₽`;
  }
}