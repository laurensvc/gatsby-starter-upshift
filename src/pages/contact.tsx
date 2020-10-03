import React from 'react';
import GlobalCollection from '../config/globals/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';
import Contact from '../modules/contact/Contact';

const contact: React.FC = () => {
  const hasMounted = useHasMounted();

  return hasMounted ? (
    <GlobalCollection>
      <Contact />
    </GlobalCollection>
  ) : null;
};

export default contact;
