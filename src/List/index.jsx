import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col as OriginalCol } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';
import media from './../media';
import { makeImageLink } from './../helpers';

export const StyledCol = styled(OriginalCol)`
  margin: 6px 0;
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  flex-grow: 2;
  ${media.tablet`padding-top: 64px;`}
`;

const Col = ({ children }) => <StyledCol xs={12} sm={6} md={4} lg={3}>{children}</StyledCol>;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filtered: [] };
    this.load = this.load.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
  }

  load(props) {
    const { group, type } = props.match.params;
    const FETCH_URL = `https://erodionov-adidas-fake-api.now.sh/v1/products/${group}/${type}`;
    fetch(FETCH_URL)
      .then(r => r.json())
      .then(({ items }) => this.setState({ products: items, filtered: items }));
  }

  selectSize(selectedSize) {
    const filtered = selectedSize === 'All'
      ? this.state.products
      : this.state.products.filter(product => product.sizes.includes(selectedSize));
    this.setState({ filtered });
  }

  render() {
    const sizes = Array.from(new Set(this.state.products
      // eslint-disable-next-line
      .reduce((allSizes, obj) => (allSizes.push(...obj.sizes), allSizes), []),
    ));
    return (
      <Wrapper>
        <Filter
          sizes={sizes}
          onClick={this.selectSize}
        />
        <Grid fluid>
          <Row>
            {
              this.state.filtered.map((product) => {
                const { id, fileName } = product.images[0];
                return (
                  <Col key={product.id}>
                    <Card
                      to={`${this.props.match.url}/${product.id}`}
                      img={makeImageLink(id, fileName, 256)}
                      price={product.price}
                      sale={product.sale}
                    />
                  </Col>
                );
              })
            }
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}
