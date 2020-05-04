import React from 'react';
import './ItemsList.css';

class ItemsList extends React.Component {
render() {
  	const {items} = this.props
    return (
    	<ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )}
}

export default ItemsList