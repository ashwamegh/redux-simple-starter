import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  incrementCounter,
  decrementCounter
} from "./../actions/action_counter";

// Material UI
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class DashboardComponent extends Component {
  incrementCount = () => this.props.actions.incrementCount();
  decrementCount = () => this.props.actions.decrementCount();

  render() {
    const style = {
      primary: {
        margin: 12,
        borderRadius: "25px"
      },
      button: {
        borderRadius: "25px"
      }
    };

    return (
      <MuiThemeProvider>
        <div className="counter-dashboard">
          <div className="counter-heading">
            <h2>Count Your Clicks</h2>
          </div>
          <div>
            <h3 className="counter-status">{this.props.count}</h3>
          </div>
          <RaisedButton
            label="Increment"
            primary={true}
            style={style.primary}
            buttonStyle={style.button}
            overlayStyle={style.button}
            onClick={this.incrementCount.bind(this)}
          />
          <RaisedButton
            label="Decrement"
            secondary={true}
            style={style.primary}
            buttonStyle={style.button}
            overlayStyle={style.button}
            onClick={this.decrementCount.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

// Uses state injected/updated through the store that again uses
// the root reducer to verify the current status

const mapStateToProps = state => {
  const { CounterReducer } = state;
  return {
    count: CounterReducer.count
  };
};

// Uses store.dispatch() to dispatch actions using bindAcionCreators Api
// that do the background connection and supply the actions to all the reducers

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      incrementCount: bindActionCreators(incrementCounter, dispatch),
      decrementCount: bindActionCreators(decrementCounter, dispatch)
    }
  };
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(
  DashboardComponent
);
