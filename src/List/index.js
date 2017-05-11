import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Card from './Card';
import { Grid, Row } from 'react-flexbox-grid';
import prodImg1 from './../assets/images/prod-1.png';
import prodImg2 from './../assets/images/prod-2.png';
import prodImg3 from './../assets/images/prod-3.png';

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  flex-grow: 2;
`

const CutomGrid = styled(Grid)`
  padding: 0 1.4rem !important;
`

const generateId = () => Date.now()+'-'+Math.round(Math.random()*10000000);
const generateNumber = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

let products =  new Array(300).fill(0).map(el=>({
  key: generateId(),
  price: `$ ${generateNumber(100,300)}`,
  sale: !Math.round(Math.random()),
  img: [prodImg1,prodImg2,prodImg3][generateNumber(0,2)],
}))

export default class List extends React.Component {
  render(){
    return (
      <Wrapper>
        <Filter />
        <CutomGrid fluid>
          <Row>
            {
              products.map(product=><Card {...product} />)
            }
          </Row>
        </CutomGrid>
      </Wrapper>
    )
  }
}
