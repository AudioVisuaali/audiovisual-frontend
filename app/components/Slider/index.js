import styled from 'styled-components';

const thumbColor = props => {
  if (props.disableTheme) {
    return null;
  }

  return {
    '::-webkit-slider-thumb': {
      background: props.theme.isDark
        ? props.theme.light[50]
        : props.theme.grey[700],
    },

    '::-moz-range-thumb': {
      background: props.theme.isDark
        ? props.theme.light[50]
        : props.theme.grey[700],
    },
  };
};

const Slider = styled.input(
  {
    appearance: 'none',
    cursor: 'pointer',
    width: '100%',
    height: 6,
    borderRadius: 5,
    background: '#d3d3d3',
    outline: 'none',
    opacity: 0.9,
    transition: 'opacity 0.2s',
    flexGrow: 1,

    ':hover': {
      opacity: 1,
    },

    '::-webkit-slider-thumb': {
      appearance: 'none',
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      cursor: 'pointer',
    },

    '::-moz-range-thumb': {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      cursor: 'pointer',
    },
  },
  thumbColor,
);

Slider.type = 'range';

export default Slider;
