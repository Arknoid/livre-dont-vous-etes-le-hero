/**
 * Import
 */
import React, { Fragment } from 'react';
/**
 * Local import
 */
import './page.sass';
import Text from 'components/Text';
import Link from 'components/Link';

/**
 * Component
 */
const withPage = (PageComponent, setting) => (

  function Page(props) {
    const { player, consumeRation, resetGame } = props;
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
                  Vous succombez à vos blessures dans d'horribles souffrance...
                </Text>
                <Link action={resetGame}>
                  Recommencer
                </Link>
              </Fragment>
            )}
            {(player.energy <= 0) && (
              <Fragment>
                <Text>
                Vous êtes épuiser et affamer, vous devez consommer une ration.
                </Text>
                <Link action={consumeRation}>
                  Manger et se reposer.
                </Link>
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
export default withPage;
