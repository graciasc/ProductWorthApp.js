import React from 'react'


export default class Products extends React.Component {
  render() {
    return (
      <div> 
      <p> {this.props.name} </p>
      <p> {this.props.price} </p>
      {/*<p > {this.props.worth} </p>*/}
      <button onClick={() => this.props.handleWorthIt(this.prop.item.id)}> {this.props.worth} </button> 

      </div>
    )
  }
}