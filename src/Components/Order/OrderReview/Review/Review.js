import React from 'react';
import Cart from '../Cart/Cart';
import ShippingInfo from '../ShippingInfo/ShippingInfo';

const Review = () => {
    return (
        <div className="d-flex container justify-content-between">
            <div style={{ width: '40%' }}>
                <ShippingInfo></ShippingInfo>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Review;