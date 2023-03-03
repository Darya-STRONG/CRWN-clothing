import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <dir className="cart-items">
                <Button>GO TO CHECKOUT</Button>
            </dir>
        </div>
    )
}

export default CartDropdown;