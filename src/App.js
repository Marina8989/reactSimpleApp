import React from 'react';
import Form from './components/Form';
import Items from './components/Items';
import './index.css';

class App extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
       const item = {
           value,
           id: `${Math.floor(Math.random() * 20)}`,
           completed: false
       }
       const newValue = [...this.state.list, item];
       this.setState({list: newValue});
    }
    handleToggle = (item) => {
       const toggle = this.state.list.map(element => {
           if(element.id === item.id) {
             element.completed = !element.completed;
           }
           return element;
       })
       this.setState({list: toggle});
    }
    render(){
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Items list={this.state.list} handleToggle={this.handleToggle}/>
            </>
        )
    }
}

export default App; 