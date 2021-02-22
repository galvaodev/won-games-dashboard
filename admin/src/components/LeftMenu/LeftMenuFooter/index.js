/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        Desenvolvido por
        <a key="website" href="https://github.com/galvaodev/" target="_blank" rel="noopener noreferrer">
           GalvãoDev
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
