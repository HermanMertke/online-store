import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCartItem, getCartItems } from '../actions/itemActions';

class ItemModal extends Component {
  constructor(props){
    super() 

    this.state = {
      modal: false,
      id: '',
      name: ''
    };
  }
  

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  addCartItem = () => {

    const newItem = {
      id: this.props.itemId,
      name: this.props.name
    };

    this.props.addCartItem(newItem);

    this.toggle();
    this.props.getCartItems();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item to Cart
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Cart</ModalHeader>
          <ModalBody>
            <Label for="item">{this.props.name}</Label>
            <Button onClick={this.addCartItem} color="dark" style={{ marginTop: '2rem' }} block>
              Add Item
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addCartItem, getCartItems }
)(ItemModal);
