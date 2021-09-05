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
           id: `${Math.floor(Math.random() * 50)}`,
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
    handleClick = () => {
       if(!this.state.sorted) {
          this.setState({sorted: true})
       }
       if(this.state.sorted) {
          this.setState({sorted: false})
       }
    }
    handleSort = (e, item) => {
      if(this.state.sorted === null){
        this.setState({sorted: true});
      }
      if(this.state.sorted === true) {
        this.setState({sorted: false});
      }
      if(this.state.sorted === false) {
         this.setState({sorted: null});
      }
      const priority = this.state.list.map(element => {
        if(element.id === item.id) {
            element.priority = Number(e.target.value)
        }
        return element;
      })
      this.setState({list: priority})
    }
   
   handleNewSubmit = (item, value) => {
     const newList = this.state.list.map(element => {
       if(element.id === item.id) {
          item.value = value;
       }
       return element;
     })
     this.setState({list: newList})
   }
    render(){
      const search = this.state.list.filter(el => el.value.includes(this.state.searchValue)).sort((a,b) => {return this.state.sorted ? a.priority - b.priority : b.priority - a.priority})
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Search handleSearch={this.handleSearch} />
              <Items list={search} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handleSort={this.handleSort} handleNewSubmit={this.handleNewSubmit}/><br/>
              {this.state.list.length > 0 && <Sort handleClick={this.handleClick} />}
            </>
        )
    }
}

export default App; 