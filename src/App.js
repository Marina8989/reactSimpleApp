import React from 'react';
import Form from './components/Form';
import Items from './components/Items';
import Search from './components/Search';
import Sort from './components/Sort';
import './index.css';

class App extends React.Component{
    state={
        list: [],
        searchValue: '',
        sorted: null
    }
    handleSubmit = (value) => {
       const item = {
           value,
           id: `${Math.floor(Math.random() * 20)}`,
           completed: false,
           priority: 0
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
    handleSort = () => {
      if(this.state.sorted === null){
        this.setState({sorted: true});
      }
      if(this.state.sorted === true) {
        this.setState({sorted: false});
      }
      if(this.state.sorted === false) {
         this.setState({sorted: null});
      }
    }
    handlePriority =() => {
       console.log('clock')
       
    }
    render(){
      console.log(this.state.list)
      console.log(this.state.list.priority)
      const search = this.state.list.filter(el => el.value.includes(this.state.searchValue));
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Search handleSearch={this.handleSearch} />
              <Items list={search} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handlePriority={this.handlePriority}/><br/>
              {this.state.list.length > 0 && <Sort handleSort={this.handleSort} />}
            </>
        )
    }
}

export default App; 