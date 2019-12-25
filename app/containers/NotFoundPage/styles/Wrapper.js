import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[800]);

const getBackgroundGradient = ({ theme }) => {
  const { dark, isDark, light } = theme;
  const start = isDark ? dark[200] : light[200];
  const end = isDark ? dark[700] : light[700];
  return `background-image: radial-gradient(${start}, ${end});`;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  color: ${color};

  ${getBackgroundGradient};
`;

export default Wrapper;
