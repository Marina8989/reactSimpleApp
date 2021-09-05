import React from 'react';
import List from './List';

const Items = (props) => {
    console.log(props)
     return(
         <>
           {props.list.map(item => {
              return (
                 <List 
                  key={item.id} item={item}
                  handleToggle={props.handleToggle} 
                  handleRemove={props.handleRemove}
                  handleSort={props.handleSort}
                  handleNewSubmit={props.handleNewSubmit}
                  />
              )
           })}
         </>
     )
}

export default Items