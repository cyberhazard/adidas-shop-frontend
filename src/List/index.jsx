import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';
import media from './../media';

export const CustomCol = styled(Col)`
  margin: 6px 0;
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  flex-grow: 2;
  ${media.tablet`padding-top: 64px;`}
`;

const CutomGrid = styled(Grid)`
  padding: 0 1.4rem !important;
`;

const generateId = () => `${Date.now()}-${Math.round(Math.random() * 10000000)}`;
const generateNumber = (min, max) => Math.floor((Math.random() * ((max - min) + 1)) + min);

const products = new Array(300).fill(0).map(() => ({
  key: generateId(),
  price: `$ ${generateNumber(100, 300)}`,
  sale: !Math.round(Math.random()),
  img: [
    require('./../assets/images/prod-1.png'),
    require('./../assets/images/prod-2.png'),
    require('./../assets/images/prod-3.png'),
  ][generateNumber(0, 2)],
}));

export default ({ match }) => (
  <Wrapper>
    <Filter />
    <CutomGrid fluid>
      <Row>
        {
          products.map(product => (
            <CustomCol xs={12} sm={6} md={4} lg={3} key={product.key}>
              <Card id={product.key} url={match.url} {...product} />
            </CustomCol>
          ))
        }
      </Row>
    </CutomGrid>
  </Wrapper>
);
