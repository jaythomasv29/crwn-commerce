import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'

const CartIcon = ({ toggleCartHidden, cartItems}) => {
console.log('quantity',sumQuantity(cartItems))
return (

  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{sumQuantity(cartItems)}</span>
  </div>
)
}

const sumQuantity = (cartItems) => {
  const totalQuantity = cartItems.reduce((acc, ele) => {
    return acc + ele.quantity
  }, 0)
  return totalQuantity
}

// mapStateToProps to have access to state from store
const mapStateToProps = ( { cart: { cartItems } } ) => ({
  cartItems
});


//  Used for dispatching actions to the store
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)