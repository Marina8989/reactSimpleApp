import React from 'react';
import Form from './components/Form';
import Items from './components/Items';

class App extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
       const item = {
           value,
           id: `${Math.floor(Math.random() * 20)}`
       }
       const newValue = [...this.state.list, item];
       this.setState({list: newValue});
       console.log(this.state.list)
    }
    render(){
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Items list={this.state.list}/>
            </>
        )
    }
}

export default App; 