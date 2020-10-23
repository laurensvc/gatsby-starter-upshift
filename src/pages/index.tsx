import React from 'react';
import { useTranslation } from 'react-i18next';
import GlobalCollection from '../config/globals/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';
import Products from '../components/Products/Products'
import { CartProvider } from 'use-shopping-cart'
import getStripe from '../utils/stripejs';
import Cart from '../components/Products/Cart'

const stripe = getStripe();

const Index: React.FC = () => {
  const hasMounted = useHasMounted();
  const { t } = useTranslation();


  return hasMounted ? (
    <CartProvider 
    stripe={stripe}
    successUrl="localhost:8000"
    cancelUrl="localhost:8000"
    currency="EUR"
    allowedCountries={['BE']}
    mode='client-only'
    billingAddressCollection={true}>
    <GlobalCollection>
      <div>{t('hero.title')}</div>
      <Products />
      <Cart />
    </GlobalCollection>
    </CartProvider>
  ) : null;
};

export default Index;
