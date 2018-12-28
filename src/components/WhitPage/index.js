/**
 * Import
 */
import React, { Fragment } from 'react';
/**
 * Local import
 */
import './whitPage.sass';
import Text from 'components/Text';
import Link from 'components/Link';

/**
 * Component
 */
const WhitPage = (PageComponent, setting) => (

  function Page(props) {
    const { player, setCurrentPage, consumeRation } = props;
    return (
      <section>
        <h1>{setting.chapter}</h1>
        {(player.health > 0 && player.energy > 0) ? (
          <PageComponent
            {...props}
          />
        ) : (
          <Fragment>
            {player.health <= 0 && (
              <Fragment>
                <Text>
                  Vous succombez à vos blessures d'en d'horribles souffrance...
                </Text>
                <Link to="marais" setPage={setCurrentPage}>
                  Recommencer
                </Link>
              </Fragment>
            )}
            {(player.energy <= 0) && (
              <Fragment>
                <Text>
                Vous êtes épuiser et affamer, vous devez consommer une ration.
                </Text>
                <button type="button" onClick={consumeRation}>
                  Manger et se reposer.
                </button>
              </Fragment>
            )}
          </Fragment>
        )}


      </section>
    );
  }
);


/**
 * Export
 */
export default WhitPage;
