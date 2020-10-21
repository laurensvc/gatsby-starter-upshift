import React from 'react';
import { useTranslation } from 'react-i18next';
import GlobalCollection from '../config/globals/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';
import Products from '../components/Products/Products'
import { CartProvider } from 'use-shopping-cart'
import getStripe from '../utils/stripejs';

const stripe = getStripe();

const Index: React.FC = () => {
  const hasMounted = useHasMounted();
  const { t } = useTranslation();


  return hasMounted ? (
    <CartProvider 
    stripe={stripe}
    successUrl="demo.upshift.be"
    cancelUrl="demo.upshift.be"
    currency="EUR"
    allowedCountries={['BE']}
    mode='client-only'
    billingAddressCollection={true}>
    <GlobalCollection>
      <div>{t('hero.title')}</div>
      <Products />
    </GlobalCollection>
    </CartProvider>
  ) : null;
};

export default Index;
