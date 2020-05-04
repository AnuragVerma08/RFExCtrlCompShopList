import React from 'react';

class DeleteLastItemBtn extends React.Component {
render() {
  const {deleteLastItem, noItemsFound} = this.props
    return (
    	 <button onClick={deleteLastItem} disabled={noItemsFound}>
          Delete Last Item
        </button>
    )}
}

export default DeleteLastItemBtn