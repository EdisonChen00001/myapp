import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    render() {
      return (
        <section>
            <ContentHeader>
                <H3>欢迎你的到来</H3>
            </ContentHeader>
            <ContentContext>
                <Paragraph>请查看我们的产品</Paragraph>
            </ContentContext>
        </section>);
    }
  }

const ContentHeader = styled.div`
  margin: 1rem;
  padding:2rem;
  text-align:center;
  background-color:#fff;
  border-radius:1.526rem;
`;
const ContentContext = styled.div`
    text-align:center;
    background-color:#fff;
    border-radius:1.526rem;
`;

const H3 = styled.h3`
  color: #99ccff;
`;

const Paragraph = styled.p`
    color:#ffff99;
    background-color:#000;
    border-radius:1.526rem;
`;

export default Header;
