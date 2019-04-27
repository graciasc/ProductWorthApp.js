import React, { Component } from 'react';
import Products from './Products.js'
import productInfo from './ProductsData.js'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      productItems: productInfo
    }
    this.handleWorthIt = this.handleWorthIt.bind(this)
  }
  handleWorthIt(keys) {
console.log('This work', keys)
  }
  render() {
    const products = productInfo.map( item => {
      return (
      <Products name={item.name} price={item.price} worth={item.worth} key={item.key} handleWorthIt = {this.handleWorthIt}/>
      )
    })
    return (
      <div>
        <h1> Products Worth it Yes or No? </h1>
      {products}
      </div>
    );
  }
}

export default App;
