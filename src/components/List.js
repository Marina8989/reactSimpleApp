import React from 'react';

const List = (props) => {
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)}>toggle</button>
        </li>
    )
}

export default List