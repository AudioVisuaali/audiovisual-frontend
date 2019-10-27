import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from 'components/A';
import { injectIntl } from 'react-intl';

import messages from './messages';

const Wrapper = styled.h4`
  margin-top: 50px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-weight: 400;
`;

const Coded = styled.span`
  font-weight: 500;
  color: rgba(3, 155, 229, 0.6);

  & a:hover {
    text-decoration: none;
  }
`;

const CodedLink = () => (
  <Coded>
    <A href="https://github.com/AudioVisuaali/"> {'</>'} </A>
  </Coded>
);

const CodedWithLove = ({ intl }) => {
  const str = intl.formatMessage(messages.codedWithLove, {
    coded: <CodedLink />,
  });
  return <Wrapper>{str}</Wrapper>;
};

CodedWithLove.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(CodedWithLove);
