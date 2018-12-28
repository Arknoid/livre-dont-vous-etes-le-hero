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

const PageMaraisCombat = WhitPage(() => (
  <Fragment>
    <Text>
      Vous affrontez ce terrible monstre...
    </Text>
  </Fragment>
), {
  chapter: 'Le marais maudit',
});

/**
 * Export
 */

export default PageMaraisCombat;
