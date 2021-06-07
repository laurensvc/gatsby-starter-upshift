import React from 'react';
import GlobalCollection from '../config/globals/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';
import { useIntl } from 'gatsby-plugin-intl';

const Index: React.FC = () => {
  const hasMounted = useHasMounted();
  const t = useIntl().formatMessage;

  return hasMounted ? (
    <GlobalCollection>
      <div>{t({ id: 'hero.title' })}</div>
    </GlobalCollection>
  ) : null;
};

export default Index;
