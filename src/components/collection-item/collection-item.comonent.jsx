import React from 'react';

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'



const CollectionItem = ({ item, addItem }) => (
    <div className='collection-item'>
        <div className='image' style={{     background: `url(${item.imageUrl})`      }}/>
        <div className='collection-footer'>
            <span>{ item.name }</span>
            <span>{"$" + item.price }</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>
            ADD TO CART
        </CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);


