import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerIncButtonInnerHTML: "Start"
    };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.incIfOdd = this.incIfOdd.bind(this);
    this.asyncInc = this.asyncInc.bind(this);
    this.handleTimerIncClick = this.handleTimerIncClick.bind(this);
  }

  inc() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  dec() {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  incIfOdd() {
    this.state.count % 2 && this.inc();
  }

  asyncInc() {
    setTimeout(
      () =>
        this.setState((state) => ({
          count: state.count + 1
        })),
      1000
    );
  }

  handleTimerIncClick(e) {
    if (e.target.innerHTML === "Start") {
      this.setState({
        timerIncButtonInnerHTML: "Stop",
        intervalId: setInterval(this.inc, 1000)
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({ timerIncButtonInnerHTML: "Start" });
    }
  }

  render() {
    return (
      <>
        <Count count={this.state.count} />
        <ButtonRow
          onCountChange1={this.inc}
          buttonInnerHTML1="+"
          onCountChange2={this.dec}
          buttonInnerHTML2="-"
        />
        <ButtonRow
          onCountChange1={this.incIfOdd}
          buttonInnerHTML1="+ (if odd)"
          onCountChange2={this.asyncInc}
          buttonInnerHTML2="+ (delay 1s)"
        />
        <button id="timer-inc-btn" onClick={this.handleTimerIncClick}>
          {this.state.timerIncButtonInnerHTML}
        </button>
      </>
    );
  }
}

class Count extends React.Component {
  render() {
    return <div>{this.props.count}</div>;
  }
}

class ButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.innerHTML === this.props.buttonInnerHTML1) {
      this.props.onCountChange1();
    } else {
      this.props.onCountChange2();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.buttonInnerHTML1}
        </button>
        <button onClick={this.handleClick}>
          {this.props.buttonInnerHTML2}
        </button>
      </div>
    );
  }
}

export default Counter;
