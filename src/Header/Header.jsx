import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    render() {
      return (
        <div>
            <MainHeader>
                <H1>欢迎来到晋中协和预拌商品混凝土有限公司</H1>
            </MainHeader>
        </div>);
    }
  }

const MainHeader = styled.div`
  margin: 1rem;
  padding:2rem;
  text-align:center;
  background-color:#000;
  border-radius:1.526rem;
`;

const H1 = styled.h1`
  color: #fff;
`;

export default Header;
