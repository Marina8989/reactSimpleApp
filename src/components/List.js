import React from 'react';

const List = (props) => {
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)} style={{color: 'green'}}>toggle</button>
          <button onClick={() => props.handleRemove(props.item)} style={{color: 'green'}}>remove</button>
          <select onChange={(e) => props.handleSort(e, props.item)} style={{color: 'green'}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </li>
    )
}

export default List