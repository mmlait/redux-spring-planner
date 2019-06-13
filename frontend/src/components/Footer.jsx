import React from 'react';
import styled from 'styled-components';

import colors from '../colors';


const AppFooter = styled.footer`
  background-color: ${colors.footerBg};
  color: ${colors.whiteText};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return (
    <AppFooter>
      <span>&copy;2019 Miia Laitinen</span>
    </AppFooter>
  );
}

export default Footer;
