import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import ItemDetails from './components/ItemDetails';
import Checkout from './components/Checkout';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="App">
              <AppNavbar />
              <Container>
                <Route exact path="/" component={ShoppingList}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/item-details" component={ItemDetails}/>
                <Route path="/checkout" component={Checkout}/>
              </Container>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
