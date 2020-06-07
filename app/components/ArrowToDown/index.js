import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from './styles/Button';
import Container from './styles/Container';
import PositionContainer from './styles/PositionContainer';
import messages from './messages';

const ArrowToDown = ({ active, onClick }) => (
  <Container>
    <PositionContainer active={active}>
      <Button onClick={onClick}>
        <FormattedMessage {...messages.resumeScroll} />
      </Button>
    </PositionContainer>
  </Container>
);

ArrowToDown.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ArrowToDown;
