import React, { Component } from "react";

class ShopItem extends Component {
  render() {
    return (
      <div>
        <h1>Shop Item</h1>
        <p>The shop item's id is {this.props.match.params.productId}</p>
      </div>
    );
  }
}

export default ShopItem;
