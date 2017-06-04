import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col as OriginalCol } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';
import media from './../media';

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

const makeImageLink = (id, fileName, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.load = this.load.bind(this);
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
      .then(resp => resp.json())
      .then(({ items }) => {
        this.setState({ products: items });
      });
  }

  render() {
    return (
      <Wrapper>
        <Filter />
        <Grid fluid>
          <Row>
            {
              this.state.products.map((product) => {
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
