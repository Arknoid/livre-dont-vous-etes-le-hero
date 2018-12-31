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
      <section className="page">
        <article className="page-chapter">
          <h1 className="page-chapter-title">{setting.chapter}</h1>
          <div className="page-chapter-picture" />
          <div className="page-chapter-functions" />
        </article>
        <article className="page-content">
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
        </article>
      </section>
    );
  }
);


/**
 * Export
 */
export default withPage;
