import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ProductCard from './ProductCard';

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
};

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(filter: { active: { eq: true } }, sort: { fields: [unit_amount] }) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        const products = {};
        let testArray = [];
        let testObj = {};
        console.log(prices.edges);
        return (
          <div style={containerStyles}>
            {Object.keys(prices.edges).map(key => (
              <ProductCard key={prices.edges[key].node.id} priceNode={prices.edges[key].node} />
            ))}
          </div>
        );
      }}
    />
  );
};

export default Products;
