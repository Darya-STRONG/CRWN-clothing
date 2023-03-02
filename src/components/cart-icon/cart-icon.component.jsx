import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles';

const CartIcon = () => {
  return (
    <div className='card-icon-container'>
        <ShoppingIcon className='shopping-icon'>
          <span className='item-count'>0</span>
        </ShoppingIcon>
    </div>
  )
}

export default CartIcon;