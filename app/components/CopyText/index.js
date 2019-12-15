/**
 *
 * CopyText
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { copyTextToClipboard } from 'utils/text';
import Copy from './styles/Copy';
import messages from './messages';

export const CopyText = React.forwardRef(function CopyText(props, ref) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) {
      return;
    }

    copyTextToClipboard(props.copyMe);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const currentText = () => {
    const msg = isCopied ? messages.copied : messages.copy;
    return <FormattedMessage {...msg} />;
  };

  const selectedChildren = props.label || props.children || currentText();

  return (
    <Copy isCopied={isCopied} onClick={handleCopy} ref={ref} {...props}>
      {selectedChildren}
    </Copy>
  );
});

CopyText.propTypes = {
  children: PropTypes.node,
  copyMe: PropTypes.string,
  label: PropTypes.string,
};

export default CopyText;
