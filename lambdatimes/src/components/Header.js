import React from 'react';
import styled from 'styled-components'

const HeaderHi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

@media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Date = styled.div`
  margin-left: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Temp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderHi>
      <Date>MARCH 32, 2018</Date>
      <Title>Lambda Times!!!!!!!</Title>
      <Temp>98°</Temp>
    </HeaderHi>
  )
}

export default Header
