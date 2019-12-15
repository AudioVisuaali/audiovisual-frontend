/**
 *
 * Base64
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import TextField from 'components/TextField';
import CodedWithLove from 'components/CodedWithLove';
import Copy from 'components/CopyText';

import CodeRow from './styles/CodeRow';
import Code from './styles/Code';
import messages from './messages';
import Wrapper from './styles/Wrapper';
import Container from './styles/Container';
import Label from './styles/Label';
import InputGroup from './styles/InputGroup';
import Logo from './styles/Logo';
import Description from './styles/Description';
import Comment from './styles/Comment';
import CommentCode from './styles/CommentCode';
import CodeContent from './styles/CodeContent';

const whiteSpace = amount => ' '.repeat(amount);

const buttonStyle = {
  width: '100%',
};

// eslint-disable-next-line react/prop-types
const CodeBlock = ({ url, title, subtitle }) => (
  <Code>
    <Scrollbars
      autoHide
      autoHideTimeout={200}
      autoHideDuration={200}
      universal
      autoHeight
      autoHeightMax={200}
    >
      <CodeContent>
        <CodeRow>{'{'}</CodeRow>
        <CodeRow>
          {whiteSpace(2)}&quot;url&quot;: &quot;{url}&quot;,
        </CodeRow>
        <CodeRow>
          {whiteSpace(2)}&quot;title&quot;: &quot;{title}&quot;,
        </CodeRow>
        <CodeRow>
          {whiteSpace(2)}&quot;subtitle&quot;: &quot;{subtitle}&quot;,
        </CodeRow>
        <CodeRow>{'}'}</CodeRow>
      </CodeContent>
    </Scrollbars>
  </Code>
);

export const Base64 = () => {
  const [URL, setURL] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleURLChange = e => setURL(e.target.value);
  const handleTitleChange = e => setTitle(e.target.value);
  const handleSubtitleChange = e => setSubtitle(e.target.value);

  const getNewVideo = () => ({
    url: URL,
    subtitle,
    title,
  });

  const getAsBase64 = btoa(JSON.stringify(getNewVideo()));

  // This is just for use experience
  const handleRef = ref => {
    if (!ref) {
      return;
    }

    const node = ref;
    node.scrollLeft = node.scrollWidth;
  };

  return (
    <Wrapper>
      <Container>
        <Logo>Visuals</Logo>
        <Description>
          <FormattedMessage {...messages.header} />
        </Description>
        <Comment>
          Base64 links allow you to share videos with links and subtitles
          without sending multiple links. The title of the video will be your
          filename
        </Comment>
        <Comment>
          Converted with <CommentCode>btoa()</CommentCode> and{' '}
          <CommentCode>JSON.stringify()</CommentCode>
        </Comment>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.videoInputFieldLabel} />
          </Label>
          <TextField value={URL} onChange={handleURLChange} />
        </InputGroup>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.videoTitle} />
          </Label>
          <TextField value={title} onChange={handleTitleChange} />
        </InputGroup>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
          </Label>
          <TextField value={subtitle} onChange={handleSubtitleChange} />
        </InputGroup>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.jsonPreview} />
          </Label>
          <CodeBlock url={URL} title={title} subtitle={subtitle} />
        </InputGroup>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.base64Preview} />
          </Label>
          <TextField ref={handleRef} value={getAsBase64} />
        </InputGroup>
        <Copy copyMe={getAsBase64} style={buttonStyle} />
        <CodedWithLove />
      </Container>
    </Wrapper>
  );
};

Base64.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Base64);
