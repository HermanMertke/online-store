import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

class Checkout extends Component {
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

  completeCheckout = () => {
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Checkout
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Please Confrim the purchase</ModalHeader>
          <ModalBody>
            <Button onClick={this.completeCheckout} color="dark" style={{ marginTop: '2rem' }} block>
              Buy
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Checkout;
