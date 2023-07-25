import React from "react";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.itemList.map((item, index) => {
          return (
            <Item
              key={index}
              index={index}
              value={item}
              delete={this.props.delete}
            />
          );
        })}
      </>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.value}
        <button onClick={(e) => this.props.delete(this.props.index, e)}>
          Delete
        </button>
      </>
    );
  }
}

export default ItemList;
