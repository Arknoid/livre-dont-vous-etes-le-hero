/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */
import WhitPage from 'components/WhitPage';
import Text from 'components/Text';

/**
 * Component
 */

const PageMaraisCombat = WhitPage(({ player, book, ...props }) => (
  <Fragment>
    <Text>
      Vous affrontez ce terrible monstre...
    </Text>
  </Fragment>
), {
  title: 'Le marais',
  href: 'marais',
});

/**
 * Export
 */

export default PageMaraisCombat;
