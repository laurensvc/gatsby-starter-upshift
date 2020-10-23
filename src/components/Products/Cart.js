import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const CartItems = () => {
  const { cartDetails, decrementItem, incrementItem, removeItem, redirectToCheckout } = useShoppingCart();

  const cart = [];

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    const { error } = await stripePromise.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    });

    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku];

    // all of your basic product data still exists (i.e. name, image, price)
    cart.push(
      <article>
        {/* image here */}
        {/* name here */}
        <p>{cartEntry.name}</p>
        {console.dir(cartEntry)}
        {/* formatted total price of that item */}
        <p>Line total: {cartEntry.formattedValue}</p>

        {/* What if we want to remove one of the item... or add one */}
        <button onClick={() => decrementItem(cartEntry.sku)} aria-label={`Remove one ${cartEntry.name} from your cart`}>
          -
        </button>
        <p>Quantity: {cartEntry.quantity}</p>
        <button onClick={() => incrementItem(cartEntry.sku)} aria-label={`Add one ${cartEntry.name} to your cart`}>
          +
        </button>

        {/* What if we don't want this product at all */}
        <button onClick={() => removeItem(cartEntry.sku)} aria-label={`Remove all ${cartEntry.name} from your cart`}>
          Remove
        </button>
        <button onClick={() => redirectToCheckout()}>BUY ALL THE THINGS</button>
      </article>
    );
  }

  return cart;
};

export default CartItems;
