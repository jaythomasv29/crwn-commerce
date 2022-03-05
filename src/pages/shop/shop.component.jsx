import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import shopData from './shop.data.js'

class ShopPage extends Component {
  constructor() {
    super()

    this.state = {
      collections: shopData
    }
  }

  render() {
    console.log(this.state.collections)
    const {collections} = this.state;
    return(
      <div className="shop-page">
      <h1>Shop</h1> 
        {
        collections.map(({id, title, routeName, items}) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))
        }
      </div>
    )
  }
}

export default ShopPage