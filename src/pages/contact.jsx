import React from 'react';
import Contact from '../modules/contact/Contact';
import GlobalCollection from '../config/GlobalCollection';
import useHasMounted from '../helpers/useHasMounted';

const contact = () => {
  const hasMounted = useHasMounted();

  return hasMounted ? (
    <GlobalCollection>
      <Contact />
    </GlobalCollection>
  ) : null;
};

export default contact;
