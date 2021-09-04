import React from 'react';
import Form from './components/Form';
import Items from './components/Items';
import Search from './components/Search';
import './index.css';

class App extends React.Component{
    state={
        list: [],
        searchValue: ''
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
    handleRemove = (item) => {
      const remove = this.state.list.filter(el => el.id !== item.id)
      this.setState({list: remove});
    }
    handleSearch = (e) => {
      this.setState({searchValue: e.target.value })
    }
    render(){
      const search = this.state.list.filter(el => el.value.includes(this.state.searchValue));
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Search handleSearch={this.handleSearch} />
              <Items list={search} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </>
        )
    }
}

export default App; 