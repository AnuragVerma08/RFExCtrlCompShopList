import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShopHeading from './ShopHeading';
import ShopInput from './ShopInput';
import ItemsHeading from './ItemsHeading';
import ItemsList from './ItemsList';
import AddItemSubmitBtn from './AddItemSubmitBtn';
import DeleteLastItemBtn from './DeleteLastItemBtn';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    const {items, value} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ShopHeading />
        <form onSubmit={this.addItem}>
    	<ShopInput value={value} handleChange={this.handleChange}/>
		<AddItemSubmitBtn disabled={this.inputIsEmpty()}/>
        </form>
		<DeleteLastItemBtn deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()}/>
        <ItemsHeading />
		<ItemsList  items={items} />
      </div>
    );
  }
}

export default App;
