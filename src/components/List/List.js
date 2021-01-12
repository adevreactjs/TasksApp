import React from 'react';
import './List.scss'
import classNames from 'classnames';

const List = (props) => {

    const {items} = props

    return (
        <ul className="List">
            {items.map((item, index) => {
                return (
                 <li className={classNames(item.className, {'active': item.active}) } key={index}>
                    <i>
                        {item.icon ? (item.icon) : (<i className={`badge badge-${item.color}`}/>) }
                    </i>
                    <span>{item.name}</span>
                </li>
                )
            })}

        
      </ul>
    )
}

export default List