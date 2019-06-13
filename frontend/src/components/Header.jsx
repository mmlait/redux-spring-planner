import React from 'react';
import styled from 'styled-components';


const AppHeader = styled.header`
  text-align: center;
  margin: 50px 0;
  font-size: 1.8rem;
  color: #b5135b;
  text-shadow: 2px 2px #A26A98;
`

const Header = () => {
  return (
    <AppHeader>
      <h1>Planner</h1>
    </AppHeader>
  );
}

export default Header;
