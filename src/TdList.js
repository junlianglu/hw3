import React from "react";
import ItemList from "./ItemList.js";

class TdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [], sortBy: "A-Z" };
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.sort = this.sort.bind(this);
  }

  add(item) {
    this.setState((state) => {
      return { itemList: [...state.itemList, item] };
    });
  }

  delete(index) {
    this.setState((state) => {
      return { itemList: state.itemList.filter((item, i) => i !== index) };
    });
  }

  handleSortChange(e) {
    this.setState({ sortBy: e.target.value });
    this.sort();
  }

  sort() {
    this.setState((state) => {
      let itemList = [...state.itemList];
      itemList.sort();
      if (state.sortBy === "Z-A") {
        itemList.reverse();
      }
      return { itemList: itemList };
    });
  }

  render() {
    return (
      <>
        <InputField add={this.add} />
        <select value={this.state.sortBy} onChange={this.handleSortChange}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <ItemList itemList={this.state.itemList} delete={this.delete} />
      </>
    );
  }
}

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add" />
        </form>
      </>
    );
  }
}

export default TdList;
