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
    setInStorage = (list) => {
       localStorage.setItem('list', JSON.stringify(list))
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
       this.setInStorage(newValue)
    }
    handleToggle = (item) => {
       const toggle = this.state.list.map(element => {
           if(element.id === item.id) {
             element.completed = !element.completed;
           }
           return element;
       })
       this.setState({list: toggle});
       this.setInStorage(toggle);
    }
    handleRemove = (item) => {
      const remove = this.state.list.filter(el => el.id !== item.id)
      this.setState({list: remove});
      this.setInStorage(remove);
    }
    handleSearch = (e) => {
      this.setState({searchValue: e.target.value });
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
      this.setState({list: priority});
      this.setInStorage(priority);
    }
   
   handleNewSubmit = (item, value) => {
     const newList = this.state.list.map(element => {
       if(element.id === item.id) {
          item.value = value;
       }
       return element;
     })
     this.setState({list: newList});
     this.setInStorage(newList);
   }
   componentDidMount() {
     this.setState({
       list: JSON.parse(localStorage.getItem('list')) || []
     })
   }
    render(){
      const {list, sorted} = this.state;
      const newList = list.filter(item => item.value.includes(this.state.searchValue))
      // const search = this.state.list.filter(el => el.value.includes(this.state.searchValue)).sort((a,b) => {return this.state.sorted ? a.priority - b.priority : b.priority - a.priority})
        return(
            <>
              <h2>Hello</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <Search handleSearch={this.handleSearch} />
              <Items list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handleSort={this.handleSort} handleNewSubmit={this.handleNewSubmit}/><br/>
              {this.state.list.length > 0 && <Sort handleClick={this.handleClick} />}
            </>
        )
    }
}

export default App; 