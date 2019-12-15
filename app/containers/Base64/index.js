/**
 *
 * Base64
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

import TextField from 'components/TextField';
import CodedWithLove from 'components/CodedWithLove';
import Copy from 'components/CopyText';
import QuestionSVG from 'svgs/Question';
import { isFile, isVideo } from 'utils/url';

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
import Tooltip from './styles/Tooltip';
import MultipleOptionsInput from './styles/MultipleOptionsInput';

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

export const Base64 = ({ intl }) => {
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
          <FormattedMessage {...messages.description} />
        </Comment>
        <Comment>
          <FormattedMessage {...messages.descriptionConvertedWith} />{' '}
          <CommentCode>btoa()</CommentCode>{' '}
          <FormattedMessage {...messages.descriptionAnd} />{' '}
          <CommentCode>JSON.stringify()</CommentCode>
        </Comment>
        <InputGroup>
          <Label>
            <FormattedMessage {...messages.videoInputFieldLabel} />
          </Label>
          <TextField value={URL} onChange={handleURLChange} />
        </InputGroup>
        <InputGroup>
          <MultipleOptionsInput>
            <Label>
              <FormattedMessage {...messages.videoTitle} />
            </Label>
            <Tooltip label={intl.formatMessage(messages.filesOnly)}>
              <QuestionSVG />
            </Tooltip>
          </MultipleOptionsInput>
          <TextField
            disabled={!isFile(URL)}
            value={title}
            onChange={handleTitleChange}
          />
        </InputGroup>
        <InputGroup>
          <MultipleOptionsInput>
            <Label>
              <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
            </Label>
            <Tooltip
              width={100}
              label={intl.formatMessage(messages.videosOnly)}
            >
              <QuestionSVG />
            </Tooltip>
          </MultipleOptionsInput>
          <TextField
            disabled={!isVideo(URL)}
            value={subtitle}
            onChange={handleSubtitleChange}
          />
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
          <TextField ref={handleRef} value={getAsBase64} readOnly />
        </InputGroup>
        <Copy copyMe={getAsBase64} style={buttonStyle} />
        <CodedWithLove />
      </Container>
    </Wrapper>
  );
};

Base64.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(Base64);
