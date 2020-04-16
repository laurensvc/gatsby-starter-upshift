import React from 'react';
import GlobalCollection from '../config/GlobalCollection';
import { FormattedMessage as Trans } from 'react-intl';

const Index = () => (
  <div>
    <h1>Hello upshift</h1>
    <GlobalCollection>
      <Trans id="title" />
    </GlobalCollection>
  </div>
);

export default Index;
