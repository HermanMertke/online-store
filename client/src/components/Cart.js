import React, { Component } from 'react';
import { Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartItems, deleteCartItem } from '../actions/itemActions';
import Checkout from './Checkout';
import PropTypes from 'prop-types';

class Cart extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }

  onDeleteClick = id => {
    this.props.deleteCartItem(id);
  };

  render() {
    const items = this.props.item.cartItems;
    return (
      <div>
        {items.map(({ _id, name }) => (
          <div key={_id} timeout={500}>
            <Card className="card">
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  Delete
                </Button>
                <Link to={{pathname: '/item-details/', state: { name: name}}}>See Details</Link>
              </CardBody>
            </Card>
          </div>
        ))}
        {items.length > 0 ?
        <Checkout /> : 
        "Your cart is empty"}
      </div>
    );
  }
}

Cart.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getCartItems, deleteCartItem }
)(Cart);
