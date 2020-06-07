import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import Wrapper from './styles/Wrapper';
import Indicator from './styles/Indicator';

const Tabs = React.forwardRef(function Tabs(props, ref) {
  const { children: childrenProps, onChange, value } = props;
  const [indicatorOffset, setIndicatorOffset] = useState(20);
  const [indicatorWidth, setIndicatorWidth] = useState(20);
  const [mounted, setMounted] = useState(false);
  const valueToIndex = new Map();
  const childrensRef = useRef(null);

  useEffect(() => {
    setTab(value);
    setMounted(true);
  }, []);

  useEffect(() => {
    setTab(value);
  }, [value, props.locale]);

  const setTab = v => {
    const tabsNode = childrensRef.current;
    const activeTab = tabsNode.children[valueToIndex.get(v)];
    const { width, left } = activeTab.getBoundingClientRect();
    const { left: containerOffsetLeft } = tabsNode.getBoundingClientRect();
    setIndicatorWidth(width);
    setIndicatorOffset(left - containerOffsetLeft);
  };

  let childIndex = 0;
  const children = React.Children.map(childrenProps, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (child.type === React.Fragment) {
      return null;
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    const selected = childValue === value;
    valueToIndex.set(childValue, childIndex);

    childIndex += 1;
    return React.cloneElement(child, {
      selected,
      onChange,
      value: childValue,
    });
  });

  return (
    <Wrapper ref={ref}>
      <div ref={childrensRef}>{children}</div>
      {mounted && <Indicator left={indicatorOffset} spread={indicatorWidth} />}
    </Wrapper>
  );
});

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export default connect(mapStateToProps)(Tabs);
