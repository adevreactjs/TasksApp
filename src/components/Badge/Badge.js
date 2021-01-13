import React from 'react'
import './Badge.scss' 

const Badge = (props) => {
    console.log(props.item)
    return (
        <i>
             {props.item.icon ? (props.item.icon) : (<i className={`badge badge--${props.item}`}/>) }
        </i>
        
    )
}

export default Badge