import React from 'react';

import CollectionItem from "../collection-item/collection-item-component";
import './collection-preview.styles.scss';



const CollectionPreview = ({title, items}) => {
    // console.log(title,items)
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => {
                    return idx < 4
                }).map(({id, ...props}) => {
                   return  <CollectionItem key={id} {...props}/>
                })}
            </div>
        </div>
    )
}
export default CollectionPreview;