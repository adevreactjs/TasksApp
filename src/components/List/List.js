import React from 'react';
import './List.scss'
import classNames from 'classnames';
import Badge from '../Badge/Badge';

const List = (props) => {

    const {items} = props

    return (
        <ul onClick={props.onClick} className="List">
            {items.map((item, index) => {
                return (
                 <li className={classNames(item.className, {'active': item.active}) } key={index}>
                    <i>
                    {item.icon ? (item.icon) : <Badge item={item}/>} 
                    </i>
                    <span>{item.name}</span>
                </li>
                )
            })}

        
      </ul>
    )
}

export default List