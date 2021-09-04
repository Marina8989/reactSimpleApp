import React from 'react';
import List from './List';

const Items = (props) => {
    console.log(props)
     return(
         <>
           {props.list.map(item => {
              return (
                 <List key={item} item={item} />
              )
           })}
         </>
     )
}

export default Items