import React from'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HOUUxJeWHP02WJt0eMU9Z8MAvhe6LRelhP0oOF2fuzG9Q6nQwI1WoNRmBUKoCmANnmP43So4jLRk3EbZMQYiZkO00qnGwOWm1';
    

   const onToken = token => {
     console.log(token);
     alert('Payment Successful');
    }

  return (
    <StripeCheckout
       label= 'Pay Now'
       name= 'My Shopping Cart.'
       billingAddress
       shippingAddress
       image = 'https://svgshare.com/i/CUz.svg'
       description = {`Your Total Is $$ {price}`}
       amount = {priceForStripe}
       panelLabel = 'Pay Now'
       token = {onToken}
       stripeKey = {publishableKey}
    />
  );
};

export default stripeCheckoutButton;