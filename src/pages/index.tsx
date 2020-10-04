import React from 'react';
import { useTranslation } from 'react-i18next';
import GlobalCollection from '../config/globals/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';

const Index: React.FC = () => {
  const hasMounted = useHasMounted();
  const { t } = useTranslation();

  return hasMounted ? (
    <GlobalCollection>
      <div>{t('hero.title')}</div>
    </GlobalCollection>
  ) : null;
};

export default Index;
