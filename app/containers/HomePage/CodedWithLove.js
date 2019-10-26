import React from 'react';
import styled from 'styled-components';
import A from 'components/A';

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

const CodedWithLove = () => (
  <Wrapper>
    This website is
    <Coded>
      <A href="https://github.com/AudioVisuaali/"> {'</>'} </A>
    </Coded>
    with 💖 in the night of the night
  </Wrapper>
);

export default CodedWithLove;
