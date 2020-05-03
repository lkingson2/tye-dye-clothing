import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSections } from '../../redux/directory/directory.selector'


const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {
                sections.map(({title, imageUrl, id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl = {imageUrl} size={size} linkUrl={linkUrl}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})
    


export default connect(mapStateToProps)(Directory);