import React from "react";
import Counter from "./Counter";
import TdList from "./TdList";

const HOC = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const { visible, ...rest } = props;
      this.state = { visible: visible, rest: rest };
      this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(e) {
      this.setState({ visible: e.target.checked });
    }

    render() {
      return (
        <>
          {this.state.visible && <Component {...this.state.rest} />}
          <input
            type="checkbox"
            checked={this.state.visible}
            onChange={this.handleChecked}
          />
          <label>visible</label>
        </>
      );
    }
  };
};

export const HOCCounter = HOC(Counter);
export const HOCTdList = HOC(TdList);
