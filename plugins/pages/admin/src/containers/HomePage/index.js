/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Container from '../../components/Container'

const HomePage = () => {
  return (
    <Container>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
    </Container>
  );
};

export default memo(HomePage);
