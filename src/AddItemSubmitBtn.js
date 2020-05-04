import React from 'react';

class AddItemSubmit extends React.Component {
render() {
  	const {disabled} = this.props
    return (
    	<button disabled={disabled}>Add</button>
    )}
}

export default AddItemSubmit