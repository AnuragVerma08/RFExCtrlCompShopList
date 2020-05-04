import React from 'react';

class ShopInput extends React.Component {
render() {
  const {value, handleChange} = this.props
    return (
    	<input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
    )}
}

export default ShopInput