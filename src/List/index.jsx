import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col as OriginalCol } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';
import media from './../media';
import { makeImageLink } from './../helpers';
import { get } from './../api';

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
    this.state = { products: [], filter: null };
    this.load = this.load.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
    this.wrapper.scrollTop = 0;
  }

  handleFilterChange(filter = '') {
    this.setState({ filter });
  }

  load(props) {
    const { group, type } = props.match.params;
    get(group, type)
      .then(({ items }) => this.setState({ products: items, filter: null }));
  }

  render() {
    const sizes = Array.from(new Set(this.state.products
      .reduce((allSizes, obj) => [...allSizes, ...obj.sizes], []),
    ));
    const filtered = this.state.filter
      ? this.state.products.filter(obj => obj.sizes.includes(this.state.filter))
      : this.state.products;
    return (
      <Wrapper innerRef={(wrapper) => { this.wrapper = wrapper; }}>
        <Filter
          sizes={sizes}
          onClick={this.handleFilterChange}
        />
        <Grid fluid>
          <Row>
            {
              filtered.map((product) => {
                const { id, fileName } = product.images[0];
                return (
                  <Col key={product.id}>
                    <Card
                      to={`${this.props.match.url}/${product.id}`}
                      img={makeImageLink(id, fileName, 256)}
                      price={product.price}
                      currency={product.currency}
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
