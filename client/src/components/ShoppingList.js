import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import ItemModal from './ItemModal';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
            {items.map(({ _id, name }) => (
              <div key={_id} className="item-container">
                <Card className="card">
                  <CardBody>
                    <CardImg className="cardImg" src="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Rookie-Of-The-Year/Images/Air-Jordan-1-Retro-High-Rookie-Of-The-Year/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1540493582" alt="Card image cap" />
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <ItemModal itemId={_id} name={name}/>
                    <Link to={{pathname: '/item-details/', state: { name: name, id: _id}}}>See Details</Link>
                  </CardBody>
                </Card>
              </div>
            ))}
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
