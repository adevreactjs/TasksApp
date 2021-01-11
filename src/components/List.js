import React from 'react';

const List = (props) => {
    return (
        <ul className="todo__list">
        <li className="active">
          <i>
            <img src={props.listSvg} alt="img"/>
          </i>
          <span>Все задачи</span>
        </li>
      </ul>
    )
}

export default List