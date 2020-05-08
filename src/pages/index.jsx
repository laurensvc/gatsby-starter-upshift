import React from 'react';
import GlobalCollection from '../config/GlobalCollection';
import { FormattedMessage as Trans } from 'react-intl';
import useHasMounted from '../helpers/useHasMounted';

const Index = () => {
  const hasMounted = useHasMounted();

  return hasMounted ? (
    <div>
      <h1>Hello upshift</h1>
      <GlobalCollection>
        <Trans id="title" />
      </GlobalCollection>
    </div>
  ) : null;
};

export default Index;
