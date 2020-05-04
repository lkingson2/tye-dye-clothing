import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import './collections-overview.styles.scss'

import { selectCollections } from '../../redux/shop/shop.selector'


const collectionsOverview = ( { collections }) => (
    <div className='collections-overview'>
        {
            Object.keys(collections).map(key => (
                <PreviewCollection key={key} {...collections[key]}/> 
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(collectionsOverview);