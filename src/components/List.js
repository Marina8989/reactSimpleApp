import React from 'react';

class List extends React.Component{
  state = {
    newInput: this.props.item.value,
    showInput: false
  }
  handleClick = () => {
    this.setState({showInput: true})
  }
  handleChange = (e) => {
    this.setState({newInput: e.target.value});
  }
  handleNewSubmit = (e) => {
     e.preventDefault();
     const prevValue = this.state.newInput;
     const item = this.props.item;
     this.props.handleNewSubmit(item, prevValue);
     this.setState({newInput: prevValue, showInput: false});
  }
    render(){
      return(
        <li className={this.props.item.completed ? 'toggle' : ''}>
        <div onClick={this.handleClick}>
          {this.state.showInput ? (
            <form onSubmit={this.handleNewSubmit}>
             <input value={this.state.newInput} onChange={this.handleChange}/>
            </form>
            ) : (this.props.item.value)}
        </div>
          
          <button onClick={() => this.props.handleToggle(this.props.item)} style={{color: 'green'}}>toggle</button>
          <button onClick={() => this.props.handleRemove(this.props.item)} style={{color: 'green'}}>remove</button>
          <select onChange={(e) => this.props.handleSort(e, this.props.item)} style={{color: 'green'}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </li>
    )
    }
}

export default List